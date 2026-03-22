// BarTouch - Sistema de Control de Inventario y Stock

// Base de datos de botellas en inventario
let inventory = [
    { id: 1, name: 'Johnnie Walker Black', type: 'whisky', capacity: 750, current: 750, unit: 'ml' },
    { id: 2, name: 'Absolut Vodka', type: 'vodka', capacity: 750, current: 750, unit: 'ml' },
    { id: 3, name: 'Havana Club 3 Años', type: 'ron', capacity: 750, current: 750, unit: 'ml' },
    { id: 4, name: 'Tanqueray Gin', type: 'gin', capacity: 750, current: 750, unit: 'ml' },
    { id: 5, name: 'Fernet Branca', type: 'fernet', capacity: 750, current: 750, unit: 'ml' },
    { id: 6, name: 'Aperol', type: 'aperitivo', capacity: 750, current: 750, unit: 'ml' },
    { id: 7, name: 'Tequila Jose Cuervo', type: 'tequila', capacity: 750, current: 750, unit: 'ml' },
    { id: 8, name: 'Cointreau', type: 'licor', capacity: 750, current: 750, unit: 'ml' },
    { id: 9, name: 'Campari', type: 'aperitivo', capacity: 750, current: 750, unit: 'ml' },
    { id: 10, name: 'Cachaça 51', type: 'cachaca', capacity: 1000, current: 1000, unit: 'ml' },
    { id: 11, name: 'Malibu', type: 'ron-coco', capacity: 750, current: 750, unit: 'ml' },
    { id: 12, name: 'Vermouth Rosso', type: 'vermouth', capacity: 750, current: 750, unit: 'ml' },
    { id: 13, name: 'Triple Sec', type: 'licor', capacity: 750, current: 750, unit: 'ml' },
    { id: 14, name: 'Granadina', type: 'jarabe', capacity: 500, current: 500, unit: 'ml' },
    { id: 15, name: 'Jarabe Simple', type: 'jarabe', capacity: 1000, current: 1000, unit: 'ml' }
];

// Recetas con consumo de ML por trago
const recipes = {
    // TRAGOS
    'Fernet con Coca': {
        ingredients: {
            'fernet': 60,  // 60ml de Fernet (shot doble)
            'coca-cola': 200  // 200ml de Coca (no cuenta para inventario)
        },
        price: 25000
    },
    'Vodka con Energizante': {
        ingredients: {
            'vodka': 60,  // 60ml de Vodka
            'energizante': 250  // Red Bull (no cuenta)
        },
        price: 30000
    },
    'Whisky con Coca': {
        ingredients: {
            'whisky': 60,  // 60ml de Whisky
            'coca-cola': 200
        },
        price: 35000
    },
    'Ron con Coca': {
        ingredients: {
            'ron': 60,  // 60ml de Ron
            'coca-cola': 200
        },
        price: 25000
    },
    'Gin Tonic': {
        ingredients: {
            'gin': 60,  // 60ml de Gin
            'tonica': 200  // Agua tónica
        },
        price: 35000
    },
    
    // COCKTAILS
    'Aperol Spritz': {
        ingredients: {
            'aperitivo': 90,  // 90ml de Aperol
            'prosecco': 60,   // 60ml de Prosecco
            'soda': 30        // Splash de soda
        },
        price: 35000
    },
    'Mojito': {
        ingredients: {
            'ron': 60,        // 60ml de Ron blanco
            'jarabe': 20,     // 20ml jarabe simple
            'soda': 100,      // Soda
            'lima': 1,        // 1 lima (no cuenta)
            'menta': 8        // 8 hojas de menta (no cuenta)
        },
        price: 30000
    },
    'Margarita': {
        ingredients: {
            'tequila': 60,    // 60ml de Tequila
            'licor': 30,      // 30ml de Cointreau o Triple Sec
            'lima': 30        // 30ml jugo de lima
        },
        price: 35000
    },
    'Piña Colada': {
        ingredients: {
            'ron-coco': 60,   // 60ml de Ron de coco (Malibu)
            'crema-coco': 90, // 90ml crema de coco
            'piña': 120       // 120ml jugo de piña
        },
        price: 35000
    },
    'Cosmopolitan': {
        ingredients: {
            'vodka': 45,      // 45ml de Vodka
            'licor': 15,      // 15ml de Cointreau
            'arandano': 30,   // 30ml jugo de arándano
            'lima': 15        // 15ml jugo de lima
        },
        price: 38000
    },
    'Caipirinha': {
        ingredients: {
            'cachaca': 60,    // 60ml de Cachaça
            'azucar': 2,      // 2 cucharadas de azúcar
            'lima': 1         // 1 lima
        },
        price: 28000
    },
    'Negroni': {
        ingredients: {
            'gin': 30,        // 30ml de Gin
            'aperitivo': 30,  // 30ml de Campari
            'vermouth': 30    // 30ml de Vermouth rosso
        },
        price: 40000
    },
    'Daiquiri': {
        ingredients: {
            'ron': 60,        // 60ml de Ron blanco
            'jarabe': 20,     // 20ml jarabe simple
            'lima': 25        // 25ml jugo de lima
        },
        price: 32000
    }
};

// Mapeo de tipos a ingredientes específicos
const typeToInventory = {
    'fernet': 'Fernet Branca',
    'vodka': 'Absolut Vodka',
    'whisky': 'Johnnie Walker Black',
    'ron': 'Havana Club 3 Años',
    'gin': 'Tanqueray Gin',
    'aperitivo': 'Aperol',  // Default Aperol, pero puede ser Campari
    'tequila': 'Tequila Jose Cuervo',
    'licor': 'Cointreau',
    'cachaca': 'Cachaça 51',
    'ron-coco': 'Malibu',
    'vermouth': 'Vermouth Rosso',
    'jarabe': 'Jarabe Simple'
};

// Cargar inventario del localStorage
function loadInventory() {
    const saved = localStorage.getItem('barInventory');
    if (saved) {
        inventory = JSON.parse(saved);
    }
}

// Guardar inventario
function saveInventory() {
    localStorage.setItem('barInventory', JSON.stringify(inventory));
}

// Obtener ventas del día
function getTodaySales() {
    const orders = JSON.parse(localStorage.getItem('barOrders') || '[]');
    return orders;
}

// Calcular consumo total por tipo de bebida
function calculateTotalConsumption() {
    const consumption = {};
    const sales = getTodaySales();
    
    sales.forEach(order => {
        order.items.forEach(item => {
            const recipe = recipes[item.name];
            if (recipe && recipe.ingredients) {
                Object.entries(recipe.ingredients).forEach(([ingredient, amount]) => {
                    // Solo contar líquidos alcohólicos
                    if (typeToInventory[ingredient]) {
                        const bottleName = typeToInventory[ingredient];
                        consumption[bottleName] = (consumption[bottleName] || 0) + (amount * item.quantity);
                    }
                });
            }
        });
    });
    
    return consumption;
}

// Actualizar stock basado en ventas
function updateStockFromSales() {
    const consumption = calculateTotalConsumption();
    
    // Reset stock a capacidad total (simular inicio del día)
    inventory.forEach(bottle => {
        bottle.current = bottle.capacity;
    });
    
    // Restar consumo
    Object.entries(consumption).forEach(([bottleName, consumed]) => {
        const bottle = inventory.find(b => b.name === bottleName);
        if (bottle) {
            bottle.current = Math.max(0, bottle.current - consumed);
        }
    });
    
    saveInventory();
    renderInventory();
}

// Renderizar inventario
function renderInventory() {
    const grid = document.getElementById('bottleGrid');
    grid.innerHTML = '';
    
    const consumption = calculateTotalConsumption();
    
    inventory.forEach(bottle => {
        const consumed = consumption[bottle.name] || 0;
        const percentage = Math.round((bottle.current / bottle.capacity) * 100);
        const isLow = percentage < 30;
        const isCritical = percentage < 10;
        
        const div = document.createElement('div');
        div.className = `bottle-item ${isCritical ? 'critical' : isLow ? 'low-stock' : ''}`;
        
        div.innerHTML = `
            <div class="bottle-info">
                <div class="bottle-name">${bottle.name}</div>
                <div class="bottle-capacity">
                    Capacidad: ${bottle.capacity}ml | Consumido hoy: ${consumed}ml
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%; background: ${
                        isCritical ? '#e74c3c' : isLow ? '#f39c12' : '#27ae60'
                    }"></div>
                </div>
            </div>
            <div class="bottle-stock">
                <div class="stock-ml">${bottle.current}ml</div>
                <span class="stock-percentage">${percentage}%</span>
            </div>
        `;
        
        grid.appendChild(div);
    });
    
    updateAlerts();
}

// Renderizar recetas
function renderRecipes() {
    const list = document.getElementById('recipeList');
    list.innerHTML = '';
    
    Object.entries(recipes).forEach(([name, recipe]) => {
        const div = document.createElement('div');
        div.className = 'recipe-item';
        
        let ingredientsHtml = '';
        Object.entries(recipe.ingredients).forEach(([ingredient, amount]) => {
            if (typeToInventory[ingredient]) {
                ingredientsHtml += `
                    <div class="ingredient">
                        <span class="ingredient-name">${typeToInventory[ingredient]}</span>
                        <span class="ingredient-amount">${amount} ml</span>
                    </div>
                `;
            }
        });
        
        div.innerHTML = `
            <div class="recipe-name">
                <span>${name}</span>
                <span class="recipe-price">₲ ${recipe.price.toLocaleString('es-PY')}</span>
            </div>
            ${ingredientsHtml}
        `;
        
        list.appendChild(div);
    });
}

// Renderizar tabla de ventas
function renderSalesTable() {
    const tbody = document.getElementById('salesTableBody');
    tbody.innerHTML = '';
    
    const sales = getTodaySales();
    let totalRevenue = 0;
    let totalDrinks = 0;
    
    sales.forEach(order => {
        const tr = document.createElement('tr');
        
        let productsHtml = '';
        let totalML = 0;
        
        order.items.forEach(item => {
            productsHtml += `${item.quantity}x ${item.name}<br>`;
            totalDrinks += item.quantity;
            
            const recipe = recipes[item.name];
            if (recipe && recipe.ingredients) {
                Object.entries(recipe.ingredients).forEach(([ingredient, amount]) => {
                    if (typeToInventory[ingredient]) {
                        totalML += amount * item.quantity;
                    }
                });
            }
        });
        
        totalRevenue += order.total;
        
        tr.innerHTML = `
            <td>${new Date(order.timestamp).toLocaleTimeString('es-PY', {hour: '2-digit', minute: '2-digit'})}</td>
            <td>#${order.orderNumber}</td>
            <td>${productsHtml}</td>
            <td>₲ ${order.total.toLocaleString('es-PY')}</td>
            <td>${totalML} ml</td>
            <td><span class="stock-percentage" style="background: #27ae60">Pagado</span></td>
        `;
        
        tbody.appendChild(tr);
    });
    
    // Actualizar estadísticas
    document.getElementById('totalSales').textContent = `₲ ${totalRevenue.toLocaleString('es-PY')}`;
    document.getElementById('totalDrinks').textContent = totalDrinks;
}

// Renderizar gráfico de consumo
function renderConsumptionChart() {
    const container = document.getElementById('consumptionBars');
    container.innerHTML = '';
    
    const consumption = calculateTotalConsumption();
    
    // Agrupar por tipo
    const byType = {
        'Whisky': 0,
        'Vodka': 0,
        'Ron': 0,
        'Gin': 0,
        'Otros': 0
    };
    
    Object.entries(consumption).forEach(([bottle, amount]) => {
        if (bottle.includes('Whisky') || bottle.includes('Walker')) byType['Whisky'] += amount;
        else if (bottle.includes('Vodka') || bottle.includes('Absolut')) byType['Vodka'] += amount;
        else if (bottle.includes('Ron') || bottle.includes('Havana')) byType['Ron'] += amount;
        else if (bottle.includes('Gin') || bottle.includes('Tanqueray')) byType['Gin'] += amount;
        else byType['Otros'] += amount;
    });
    
    // Actualizar resumen
    document.getElementById('whiskeyConsumption').textContent = `${byType['Whisky']} ml`;
    document.getElementById('vodkaConsumption').textContent = `${byType['Vodka']} ml`;
    document.getElementById('rumConsumption').textContent = `${byType['Ron']} ml`;
    document.getElementById('ginConsumption').textContent = `${byType['Gin']} ml`;
    
    // Crear barras
    Object.entries(byType).forEach(([type, amount]) => {
        if (amount > 0) {
            const maxAmount = Math.max(...Object.values(byType));
            const percentage = (amount / maxAmount) * 100;
            
            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            bar.innerHTML = `
                <div class="chart-label">${type}</div>
                <div class="chart-progress">
                    <div class="chart-fill" style="width: ${percentage}%">
                        ${Math.round(percentage)}%
                    </div>
                </div>
                <div class="chart-value">${amount} ml</div>
            `;
            container.appendChild(bar);
        }
    });
}

// Actualizar alertas
function updateAlerts() {
    const container = document.getElementById('alertsContainer');
    container.innerHTML = '';
    
    let lowStockCount = 0;
    let alerts = [];
    
    inventory.forEach(bottle => {
        const percentage = (bottle.current / bottle.capacity) * 100;
        if (percentage < 10) {
            lowStockCount++;
            alerts.push({
                type: 'danger',
                message: `⚠️ ${bottle.name} está casi vacío (${Math.round(percentage)}% restante)`
            });
        } else if (percentage < 30) {
            lowStockCount++;
            alerts.push({
                type: 'warning',
                message: `📉 ${bottle.name} tiene stock bajo (${Math.round(percentage)}% restante)`
            });
        }
    });
    
    alerts.forEach(alert => {
        const div = document.createElement('div');
        div.className = `alert ${alert.type === 'danger' ? 'alert-danger' : ''}`;
        div.textContent = alert.message;
        container.appendChild(div);
    });
    
    document.getElementById('lowStockCount').textContent = lowStockCount;
    document.getElementById('totalBottles').textContent = inventory.length;
}

// Exportar ventas a PDF
function exportSales() {
    const sales = getTodaySales();
    const consumption = calculateTotalConsumption();
    
    let report = `REPORTE DE VENTAS Y CONSUMO - ${new Date().toLocaleDateString('es-PY')}\n\n`;
    report += '=== RESUMEN DE VENTAS ===\n';
    
    let totalRevenue = 0;
    sales.forEach(order => {
        report += `\nOrden #${order.orderNumber} - ${order.timestamp}\n`;
        order.items.forEach(item => {
            report += `  ${item.quantity}x ${item.name} - ₲ ${(item.price * item.quantity).toLocaleString('es-PY')}\n`;
        });
        report += `  Total: ₲ ${order.total.toLocaleString('es-PY')}\n`;
        totalRevenue += order.total;
    });
    
    report += `\n=== CONSUMO DE INVENTARIO ===\n`;
    Object.entries(consumption).forEach(([bottle, amount]) => {
        const inv = inventory.find(b => b.name === bottle);
        if (inv) {
            report += `${bottle}: ${amount}ml consumidos de ${inv.capacity}ml (Quedan: ${inv.current}ml)\n`;
        }
    });
    
    report += `\n=== TOTALES ===\n`;
    report += `Venta Total: ₲ ${totalRevenue.toLocaleString('es-PY')}\n`;
    report += `Tragos Vendidos: ${sales.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.quantity, 0), 0)}\n`;
    
    // Crear archivo de texto para descargar
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte-ventas-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
}

// Exportar recetas
function exportRecipes() {
    let report = 'RECETAS Y CONSUMO DE ML POR TRAGO\n\n';
    
    Object.entries(recipes).forEach(([name, recipe]) => {
        report += `${name} - ₲ ${recipe.price.toLocaleString('es-PY')}\n`;
        Object.entries(recipe.ingredients).forEach(([ingredient, amount]) => {
            if (typeToInventory[ingredient]) {
                report += `  - ${typeToInventory[ingredient]}: ${amount} ml\n`;
            }
        });
        report += '\n';
    });
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recetas-bar.txt';
    a.click();
}

// Agregar botella nueva
function addBottle() {
    const name = prompt('Nombre de la botella:');
    const capacity = parseInt(prompt('Capacidad en ML:'));
    
    if (name && capacity) {
        inventory.push({
            id: inventory.length + 1,
            name: name,
            type: 'custom',
            capacity: capacity,
            current: capacity,
            unit: 'ml'
        });
        saveInventory();
        renderInventory();
    }
}

// Actualizar stock manualmente
function updateStock() {
    updateStockFromSales();
    alert('Stock actualizado según las ventas del día');
}

// Filtrar ventas
function filterSales(type) {
    // En una implementación completa, filtrar la tabla
    console.log('Filtrar por:', type);
}

// Actualizar fecha y hora
function updateDateTime() {
    const now = new Date();
    document.getElementById('currentDate').textContent = now.toLocaleDateString('es-PY', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('currentTime').textContent = now.toLocaleTimeString('es-PY');
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    loadInventory();
    renderInventory();
    renderRecipes();
    renderSalesTable();
    renderConsumptionChart();
    updateDateTime();
    
    // Actualizar cada minuto
    setInterval(updateDateTime, 60000);
    
    // Auto-actualizar cada 30 segundos
    setInterval(() => {
        updateStockFromSales();
        renderSalesTable();
        renderConsumptionChart();
    }, 30000);
});