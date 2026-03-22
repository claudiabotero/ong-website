# 🍺 BarTouch - Sistema de Pedidos Automático para Bares

Sistema completo de punto de venta táctil para bares con procesamiento de pagos Dinelco y sistema de comandas para bartenders.

## 🎯 Características

### Para Clientes
- **Interfaz táctil** optimizada para pantallas grandes
- **Catálogo visual** de productos con íconos
- **Categorías organizadas**: Cervezas, Tragos, Cocktails, Gaseosas, Cigarrillos
- **Carrito de compras** con control de cantidades
- **Pago con tarjeta Dinelco** integrado
- **Recibo automático** con número de orden

### Para Bartenders
- **Panel en tiempo real** de órdenes pendientes
- **Sistema Kanban** de 3 columnas (Pendientes → Preparando → Listas)
- **Alertas visuales y sonoras** para nuevas órdenes
- **Impresión de comandas** con un click
- **Contador de tiempo** por orden
- **Filtros por categoría** de productos

## 💰 Productos y Precios

### Cervezas (Latas)
- Pilsen 354ml - ₲ 10,000
- Brahma 354ml - ₲ 10,000
- Heineken 330ml - ₲ 15,000
- Corona 330ml - ₲ 18,000
- Stella Artois 330ml - ₲ 16,000

### Tragos
- Fernet con Coca - ₲ 25,000
- Vodka con Energizante - ₲ 30,000
- Whisky con Coca - ₲ 35,000
- Ron con Coca - ₲ 25,000
- Gin Tonic - ₲ 35,000

### Cocktails Especiales
- Aperol Spritz - ₲ 35,000
- Mojito - ₲ 30,000
- Margarita - ₲ 35,000
- Piña Colada - ₲ 35,000
- Cosmopolitan - ₲ 38,000
- Caipirinha - ₲ 28,000
- Negroni - ₲ 40,000
- Daiquiri - ₲ 32,000

### Gaseosas y Agua
- Coca Cola 500ml - ₲ 8,000
- Coca Zero 500ml - ₲ 8,000
- Sprite 500ml - ₲ 8,000
- Agua Mineral 500ml - ₲ 6,000
- Agua con Gas 500ml - ₲ 7,000
- Jugo de Naranja - ₲ 10,000

### Cigarrillos
- Marlboro Box - ₲ 30,000
- Marlboro Gold - ₲ 30,000
- Lucky Strike - ₲ 25,000
- Camel - ₲ 28,000
- Pall Mall - ₲ 22,000

## 🚀 Instalación

### Requisitos
- Pantalla táctil de mínimo 15" para el kiosco
- Navegador web moderno (Chrome, Firefox, Edge)
- Conexión a internet para pagos Dinelco
- Impresora térmica para comandas (opcional)

### Configuración Rápida

1. **Descargar los archivos**
```bash
git clone https://github.com/tu-usuario/bar-touch.git
cd bar-touch
```

2. **Abrir en navegador**
   - Cliente: Abrir `index.html`
   - Bartender: Abrir `bartender.html`

3. **Para producción con servidor**
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server

# Con PHP
php -S localhost:8000
```

## 📱 Uso del Sistema

### Para Clientes

1. **Seleccionar productos**
   - Navegar por categorías en la barra lateral
   - Tocar productos para agregarlos al carrito
   - Usar el botón + para agregar rápidamente

2. **Revisar carrito**
   - Click en "Ver Carrito"
   - Ajustar cantidades con + y -
   - Ver total a pagar

3. **Pagar con Dinelco**
   - Click en "Pagar con Dinelco"
   - Insertar o acercar tarjeta
   - Esperar confirmación

4. **Recibir orden**
   - Anotar número de orden
   - Esperar preparación
   - Retirar cuando esté listo

### Para Bartenders

1. **Monitorear órdenes**
   - Panel actualizado en tiempo real
   - Nuevas órdenes aparecen en "Pendientes"
   - Alertas sonoras para nuevas órdenes

2. **Preparar pedidos**
   - Click en "Preparar" para mover a columna central
   - Click en "Listo" cuando esté preparado
   - Click en "Entregado" al entregar al cliente

3. **Imprimir comandas**
   - Click en botón de impresora
   - Comanda sale automáticamente

## 🔧 Configuración Avanzada

### Modificar productos
Editar el array `products` en `app.js`:
```javascript
const products = [
    { id: 1, name: 'Nuevo Producto', category: 'categoria', price: 15000, icon: '🍺' },
    // ...
];
```

### Cambiar colores del tema
Editar variables CSS en `index.html`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #2c3e50;
}
```

### Integración con Dinelco
Para producción real, configurar en `app.js`:
```javascript
const DINELCO_CONFIG = {
    merchantId: 'TU_MERCHANT_ID',
    terminalId: 'TU_TERMINAL_ID',
    apiKey: 'TU_API_KEY'
};
```

## 🖨️ Configuración de Impresora

### Impresora Térmica USB/Serial
1. Instalar drivers de la impresora
2. Configurar puerto en el sistema
3. Usar biblioteca como `node-thermal-printer` para Node.js

### Impresora de Red
1. Configurar IP de la impresora
2. Abrir puerto 9100 (típicamente)
3. Enviar comandos ESC/POS

## 📊 Base de Datos (Opcional)

Para guardar historial de ventas:

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_number VARCHAR(10),
    items JSON,
    total DECIMAL(10,2),
    payment_method VARCHAR(50),
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔒 Seguridad

- **HTTPS obligatorio** para producción
- **Validación de tarjetas** mediante API Dinelco
- **Logs de transacciones** para auditoría
- **Backup diario** de base de datos

## 📈 Reportes

El sistema puede generar:
- Ventas por día/semana/mes
- Productos más vendidos
- Horas pico
- Métodos de pago utilizados

## 🆘 Soporte

### Problemas Comunes

**Pantalla táctil no responde**
- Calibrar pantalla en configuración del sistema
- Verificar drivers actualizados

**No imprime comandas**
- Verificar conexión de impresora
- Revisar papel y tinta
- Reiniciar servicio de impresión

**Error en pagos Dinelco**
- Verificar conexión a internet
- Confirmar credenciales API
- Contactar soporte Dinelco

## 📄 Licencia

Sistema de código abierto - Personalizable según necesidades del bar.

## 🤝 Créditos

Desarrollado para bares y restaurantes de Paraguay 🇵🇾

---

**¿Necesitas ayuda?** Contacta al desarrollador o revisa la documentación completa.