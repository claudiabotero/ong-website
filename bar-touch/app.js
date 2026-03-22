// BarTouch - Sistema de Pedidos Automático para Bar

// Base de datos de productos
const products = [
    // Cervezas
    { id: 1, name: 'Pilsen Lata 354ml', category: 'cervezas', price: 10000, icon: '🍺' },
    { id: 2, name: 'Brahma Lata 354ml', category: 'cervezas', price: 10000, icon: '🍺' },
    { id: 3, name: 'Heineken Lata 330ml', category: 'cervezas', price: 15000, icon: '🍺' },
    { id: 4, name: 'Corona 330ml', category: 'cervezas', price: 18000, icon: '🍺' },
    { id: 5, name: 'Stella Artois 330ml', category: 'cervezas', price: 16000, icon: '🍺' },
    
    // Tragos
    { id: 6, name: 'Fernet con Coca', category: 'tragos', price: 25000, icon: '🥃' },
    { id: 7, name: 'Vodka con Energizante', category: 'tragos', price: 30000, icon: '🥃' },
    { id: 8, name: 'Whisky con Coca', category: 'tragos', price: 35000, icon: '🥃' },
    { id: 9, name: 'Ron con Coca', category: 'tragos', price: 25000, icon: '🥃' },
    { id: 10, name: 'Gin Tonic', category: 'tragos', price: 35000, icon: '🥃' },
    
    // Cocktails
    { id: 11, name: 'Aperol Spritz', category: 'cocktails', price: 35000, icon: '🍹' },
    { id: 12, name: 'Mojito', category: 'cocktails', price: 30000, icon: '🍹' },
    { id: 13, name: 'Margarita', category: 'cocktails', price: 35000, icon: '🍹' },
    { id: 14, name: 'Piña Colada', category: 'cocktails', price: 35000, icon: '🍹' },
    { id: 15, name: 'Cosmopolitan', category: 'cocktails', price: 38000, icon: '🍹' },
    { id: 16, name: 'Caipirinha', category: 'cocktails', price: 28000, icon: '🍹' },
    { id: 17, name: 'Negroni', category: 'cocktails', price: 40000, icon: '🍹' },
    { id: 18, name: 'Daiquiri', category: 'cocktails', price: 32000, icon: '🍹' },
    
    // Gaseosas y agua
    { id: 19, name: 'Coca Cola 500ml', category: 'gaseosas', price: 8000, icon: '🥤' },
    { id: 20, name: 'Coca Zero 500ml', category: 'gaseosas', price: 8000, icon: '🥤' },
    { id: 21, name: 'Sprite 500ml', category: 'gaseosas', price: 8000, icon: '🥤' },
    { id: 22, name: 'Agua Mineral 500ml', category: 'gaseosas', price: 6000, icon: '💧' },
    { id: 23, name: 'Agua con Gas 500ml', category: 'gaseosas', price: 7000, icon: '💧' },
    { id: 24, name: 'Jugo de Naranja', category: 'gaseosas', price: 10000, icon: '🍊' },
    
    // Cigarrillos
    { id: 25, name: 'Marlboro Box', category: 'otros', price: 30000, icon: '🚬' },
    { id: 26, name: 'Marlboro Gold', category: 'otros', price: 30000, icon: '🚬' },
    { id: 27, name: 'Lucky Strike', category: 'otros', price: 25000, icon: '🚬' },
    { id: 28, name: 'Camel', category: 'otros', price: 28000, icon: '🚬' },
    { id: 29, name: 'Pall Mall', category: 'otros', price: 22000, icon: '🚬' }
];

// Carrito de compras
let cart = [];
let currentCategory = 'all';
let orderNumber = 1;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('all');
    updateCartCount();
});

// Renderizar productos
function renderProducts(category) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-plus"></i>
            </button>
            <div class="product-image">
                ${product.icon}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">₲ ${product.price.toLocaleString('es-PY')}</div>
            </div>
        `;
        card.onclick = function(e) {
            if (!e.target.closest('.add-to-cart')) {
                addToCart(product.id);
                showAddedAnimation(card);
            }
        };
        grid.appendChild(card);
    });
}

// Filtrar por categoría
function filterCategory(category) {
    currentCategory = category;
    
    // Actualizar botones activos
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.category-btn').classList.add('active');
    
    renderProducts(category);
}

// Agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    playSound('add');
}

// Animación de agregado
function showAddedAnimation(element) {
    element.style.animation = 'pulse 0.3s';
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
    
    // Animar el contador
    const cartButton = document.querySelector('.cart-button');
    cartButton.style.animation = 'pulse 0.3s';
    setTimeout(() => {
        cartButton.style.animation = '';
    }, 300);
}

// Abrir carrito
function openCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.add('active');
    renderCartItems();
}

// Cerrar carrito
function closeCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.remove('active');
}

// Renderizar items del carrito
function renderCartItems() {
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px; color: #999;">Tu carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.icon} ${item.name}</div>
                    <div class="cart-item-price">₲ ${(item.price * item.quantity).toLocaleString('es-PY')}</div>
                </div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }
    
    updateTotal();
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        renderCartItems();
        updateCartCount();
    }
}

// Actualizar total
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalAmount').textContent = `₲ ${total.toLocaleString('es-PY')}`;
}

// Procesar pago
function processPayment() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('paymentAmount').textContent = `₲ ${total.toLocaleString('es-PY')}`;
    
    // Mostrar modal de pago
    closeCart();
    const paymentModal = document.getElementById('paymentModal');
    paymentModal.classList.add('active');
    
    // Simular procesamiento de pago
    setTimeout(() => {
        paymentModal.classList.remove('active');
        completeOrder();
    }, 3000);
}

// Completar orden
function completeOrder() {
    const orderNum = String(orderNumber).padStart(4, '0');
    document.getElementById('orderNumber').textContent = `Orden #${orderNum}`;
    
    // Enviar orden al sistema de comandas
    sendOrderToPrinter();
    
    // Mostrar mensaje de éxito
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('active');
    
    // Limpiar carrito
    setTimeout(() => {
        cart = [];
        updateCartCount();
        successMessage.classList.remove('active');
        orderNumber++;
    }, 5000);
}

// Enviar orden a impresora (simulado)
function sendOrderToPrinter() {
    const order = {
        orderNumber: String(orderNumber).padStart(4, '0'),
        timestamp: new Date().toLocaleString('es-PY'),
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod: 'Dinelco'
    };
    
    // En producción, esto enviaría la orden al backend
    console.log('Orden enviada a imprimir:', order);
    
    // Guardar en localStorage para el panel del bartender
    let orders = JSON.parse(localStorage.getItem('barOrders') || '[]');
    orders.push(order);
    localStorage.setItem('barOrders', JSON.stringify(orders));
}

// Sonido de feedback
function playSound(type) {
    // En producción, reproducir sonidos de feedback
    console.log('Sound:', type);
}

// Estilo para animación pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Cerrar modales con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCart();
        document.getElementById('paymentModal').classList.remove('active');
    }
});