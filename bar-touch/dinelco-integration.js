// Dinelco Payment Integration for Club Condesa Bar
// Sistema de integración con la red de pagos Dinelco Paraguay

class DinelcoPaymentService {
    constructor() {
        // Configuración para ambiente de producción
        // Estos valores deben venir de variables de entorno en producción
        this.config = {
            merchantId: process.env.DINELCO_MERCHANT_ID || 'CLUBCONDESA001',
            terminalId: process.env.DINELCO_TERMINAL_ID || 'TERM001',
            apiUrl: process.env.DINELCO_API_URL || 'https://api.dinelco.com.py/v1',
            apiKey: process.env.DINELCO_API_KEY || 'demo_key_club_condesa',
            secretKey: process.env.DINELCO_SECRET_KEY || 'demo_secret',
            environment: process.env.NODE_ENV || 'development'
        };

        // URLs de retorno
        this.returnUrls = {
            success: 'https://club-condesa-bar.surge.sh/payment-success.html',
            failure: 'https://club-condesa-bar.surge.sh/payment-failure.html',
            pending: 'https://club-condesa-bar.surge.sh/payment-pending.html'
        };
    }

    // Generar firma HMAC para seguridad
    generateSignature(data) {
        const sortedData = Object.keys(data)
            .sort()
            .map(key => `${key}=${data[key]}`)
            .join('&');
        
        // En producción usar crypto.createHmac
        if (typeof window === 'undefined' && typeof require !== 'undefined') {
            const crypto = require('crypto');
            return crypto
                .createHmac('sha256', this.config.secretKey)
                .update(sortedData)
                .digest('hex');
        } else {
            // Para navegador, usar Web Crypto API o librería
            return btoa(sortedData); // Simplificado para demo
        }
    }

    // Crear transacción de pago
    async createPayment({ amount, orderId, description, customerEmail }) {
        const paymentData = {
            merchant_id: this.config.merchantId,
            terminal_id: this.config.terminalId,
            amount: amount,
            currency: 'PYG',
            order_id: orderId,
            description: description || `Orden #${orderId} - Club Condesa`,
            customer_email: customerEmail || 'cliente@clubcondesa.com',
            return_url: this.returnUrls.success,
            cancel_url: this.returnUrls.failure,
            notification_url: 'https://api.clubcondesa.com/webhook/dinelco',
            timestamp: new Date().toISOString(),
            language: 'es'
        };

        // Agregar firma de seguridad
        paymentData.signature = this.generateSignature(paymentData);

        try {
            // En desarrollo, simular respuesta
            if (this.config.environment === 'development') {
                return this.mockPaymentResponse(paymentData);
            }

            // En producción, llamar API real de Dinelco
            const response = await fetch(`${this.config.apiUrl}/payments/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.config.apiKey,
                    'X-Merchant-Id': this.config.merchantId
                },
                body: JSON.stringify(paymentData)
            });

            if (!response.ok) {
                throw new Error(`Dinelco API error: ${response.status}`);
            }

            const result = await response.json();
            return {
                success: true,
                transactionId: result.transaction_id,
                paymentUrl: result.payment_url,
                status: result.status,
                ...result
            };

        } catch (error) {
            console.error('Dinelco payment error:', error);
            throw error;
        }
    }

    // Verificar estado de transacción
    async checkTransactionStatus(transactionId) {
        try {
            if (this.config.environment === 'development') {
                return {
                    success: true,
                    transaction_id: transactionId,
                    status: 'completed',
                    amount: 0,
                    timestamp: new Date().toISOString()
                };
            }

            const response = await fetch(`${this.config.apiUrl}/payments/status/${transactionId}`, {
                headers: {
                    'X-API-Key': this.config.apiKey,
                    'X-Merchant-Id': this.config.merchantId
                }
            });

            return await response.json();
        } catch (error) {
            console.error('Error checking transaction:', error);
            throw error;
        }
    }

    // Procesar reembolso
    async refundPayment(transactionId, amount, reason) {
        const refundData = {
            transaction_id: transactionId,
            amount: amount,
            reason: reason || 'Solicitud del cliente',
            merchant_id: this.config.merchantId,
            timestamp: new Date().toISOString()
        };

        refundData.signature = this.generateSignature(refundData);

        try {
            if (this.config.environment === 'development') {
                return {
                    success: true,
                    refund_id: `REF-${Date.now()}`,
                    status: 'completed'
                };
            }

            const response = await fetch(`${this.config.apiUrl}/payments/refund`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': this.config.apiKey
                },
                body: JSON.stringify(refundData)
            });

            return await response.json();
        } catch (error) {
            console.error('Refund error:', error);
            throw error;
        }
    }

    // Mock para desarrollo
    mockPaymentResponse(data) {
        const transactionId = `DNL-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        
        // Simular diferentes escenarios
        const scenarios = ['success', 'success', 'success', 'pending', 'failed'];
        const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

        // Simular delay de red
        return new Promise((resolve) => {
            setTimeout(() => {
                if (randomScenario === 'success') {
                    resolve({
                        success: true,
                        transactionId: transactionId,
                        status: 'completed',
                        amount: data.amount,
                        currency: 'PYG',
                        message: 'Pago procesado exitosamente',
                        timestamp: new Date().toISOString(),
                        authorization_code: Math.floor(Math.random() * 1000000).toString(),
                        card_last_digits: '****',
                        card_brand: 'Visa'
                    });
                } else if (randomScenario === 'pending') {
                    resolve({
                        success: true,
                        transactionId: transactionId,
                        status: 'pending',
                        message: 'Pago pendiente de confirmación',
                        timestamp: new Date().toISOString()
                    });
                } else {
                    resolve({
                        success: false,
                        error: 'DECLINED',
                        message: 'Tarjeta declinada por el banco emisor',
                        timestamp: new Date().toISOString()
                    });
                }
            }, 2000); // Simular 2 segundos de procesamiento
        });
    }

    // Validar tarjeta (Luhn algorithm)
    validateCardNumber(cardNumber) {
        const cleaned = cardNumber.replace(/\D/g, '');
        if (cleaned.length < 13 || cleaned.length > 19) return false;

        let sum = 0;
        let isEven = false;
        
        for (let i = cleaned.length - 1; i >= 0; i--) {
            let digit = parseInt(cleaned.charAt(i), 10);
            if (isEven) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            isEven = !isEven;
        }
        
        return (sum % 10) === 0;
    }

    // Detectar tipo de tarjeta
    detectCardType(cardNumber) {
        const patterns = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
        };

        const cleaned = cardNumber.replace(/\D/g, '');
        
        for (const [type, pattern] of Object.entries(patterns)) {
            if (pattern.test(cleaned)) return type;
        }
        
        return 'unknown';
    }

    // Formatear número de tarjeta para display
    formatCardNumber(cardNumber) {
        const cleaned = cardNumber.replace(/\D/g, '');
        const chunks = cleaned.match(/.{1,4}/g) || [];
        return chunks.join(' ');
    }

    // Obtener últimos 4 dígitos
    getLastFourDigits(cardNumber) {
        const cleaned = cardNumber.replace(/\D/g, '');
        return cleaned.slice(-4);
    }
}

// Configuración específica para Paraguay
class ParaguayPaymentConfig {
    static getBanks() {
        return [
            { code: 'BNF', name: 'Banco Nacional de Fomento' },
            { code: 'BCP', name: 'Banco Continental' },
            { code: 'ITU', name: 'Banco Itaú' },
            { code: 'VIS', name: 'Visión Banco' },
            { code: 'REG', name: 'Banco Regional' },
            { code: 'GNB', name: 'Banco GNB' },
            { code: 'BBV', name: 'Banco BBVA' },
            { code: 'FAM', name: 'Banco Familiar' },
            { code: 'AMA', name: 'Banco Amambay' },
            { code: 'BAN', name: 'Bancop' },
            { code: 'SUB', name: 'Sudameris Bank' },
            { code: 'ATL', name: 'Banco Atlas' }
        ];
    }

    static getCardTypes() {
        return [
            { type: 'credit', name: 'Tarjeta de Crédito' },
            { type: 'debit', name: 'Tarjeta de Débito' },
            { type: 'prepaid', name: 'Tarjeta Prepaga' }
        ];
    }

    static getCurrencyFormat(amount) {
        return new Intl.NumberFormat('es-PY', {
            style: 'currency',
            currency: 'PYG',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }

    static validateRUC(ruc) {
        // Validación básica de RUC paraguayo
        const cleaned = ruc.replace(/\D/g, '');
        if (cleaned.length < 6 || cleaned.length > 8) return false;
        
        // El último dígito es el verificador
        const base = cleaned.slice(0, -1);
        const verifier = parseInt(cleaned.slice(-1));
        
        // Algoritmo de validación del dígito verificador
        let sum = 0;
        let multiplier = 2;
        
        for (let i = base.length - 1; i >= 0; i--) {
            sum += parseInt(base.charAt(i)) * multiplier;
            multiplier = multiplier === 9 ? 2 : multiplier + 1;
        }
        
        const calculated = 11 - (sum % 11);
        const expected = calculated === 11 ? 0 : calculated === 10 ? 0 : calculated;
        
        return verifier === expected;
    }
}

// Exportar para uso en el sistema
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DinelcoPaymentService, ParaguayPaymentConfig };
} else {
    window.DinelcoPaymentService = DinelcoPaymentService;
    window.ParaguayPaymentConfig = ParaguayPaymentConfig;
}