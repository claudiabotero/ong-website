# RideASU - App de Transporte para Asunción, Paraguay 🚗

## 📱 Descripción
RideASU es una aplicación web tipo Uber diseñada específicamente para Asunción, Paraguay. Permite a los usuarios solicitar viajes, ver conductores disponibles, estimar tarifas y navegar por la ciudad.

## 🚀 Características

### Para Pasajeros
- 🗺️ **Mapa interactivo** de Asunción con OpenStreetMap
- 📍 **Selección de pickup y destino** clickeando en el mapa
- 💰 **Cálculo de tarifas en Guaraníes** (₲)
- 🚗 **3 tipos de vehículos**: Standard, Comfort, XL (6 pasajeros)
- 📱 **Destinos populares** preconfigurados (Shopping del Sol, Aeropuerto, etc.)
- 👥 **Visualización de conductores** en tiempo real
- 💳 **3 métodos de pago**: Efectivo, Tarjeta, QR Pagos
- 📞 **Información del conductor** con foto, rating y vehículo
- ⏱️ **Tiempo estimado** de llegada

### Ubicaciones Populares Incluidas
- Shopping del Sol
- Aeropuerto Silvio Pettirossi
- Paseo La Galería
- Hospital Central IPS
- Terminal de Ómnibus
- Costanera de Asunción
- Palacio de López
- Shopping Mariscal
- Universidad Nacional de Asunción
- Mercado 4

## 💵 Estructura de Tarifas

### Standard
- **Tarifa base**: ₲ 10,000
- **Por kilómetro**: ₲ 3,500
- **Por minuto**: ₲ 500

### Comfort
- **Tarifa base**: ₲ 15,000
- **Por kilómetro**: ₲ 4,500
- **Por minuto**: ₲ 700

### XL (6 pasajeros)
- **Tarifa base**: ₲ 20,000
- **Por kilómetro**: ₲ 5,500
- **Por minuto**: ₲ 900

## 🛠️ Instalación

### Opción 1: Abrir directamente
1. Simplemente abre `index.html` en tu navegador
2. ¡Listo! La app funcionará inmediatamente

### Opción 2: Servidor local
```bash
# Con Python
python3 -m http.server 8000

# Con Node.js
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre http://localhost:8000 en tu navegador

## 📁 Estructura del Proyecto
```
ride-asuncion/
├── index.html          # Aplicación principal
├── styles/
│   └── main.css       # Estilos modernos
├── scripts/
│   └── app.js         # Lógica de la aplicación
├── data/
│   └── drivers.json   # Base de datos de conductores
└── README.md          # Este archivo
```

## 🎨 Tecnologías Utilizadas
- **HTML5** - Estructura
- **CSS3** - Estilos modernos con gradientes y animaciones
- **JavaScript Vanilla** - Sin frameworks, puro JS
- **Leaflet.js** - Mapas interactivos
- **OpenStreetMap** - Tiles de mapa gratuitos
- **Font Awesome** - Íconos
- **Google Fonts** - Tipografía Inter

## 🚀 Mejoras Futuras Posibles

### Backend Real
- Sistema de autenticación
- Base de datos PostgreSQL
- WebSockets para tiempo real
- Sistema de pagos real
- Notificaciones push

### Características Adicionales
- Historial de viajes
- Sistema de calificaciones
- Compartir viaje en vivo
- Viajes programados
- Integración con WhatsApp
- Múltiples paradas
- Cupones y promociones

## 🌍 Adaptación Local
La app está específicamente diseñada para Asunción:
- Moneda en Guaraníes (₲)
- Ubicaciones populares locales
- Tarifas ajustadas al mercado local
- Interfaz en español

## 📱 Responsive
La aplicación es totalmente responsive y funciona en:
- Desktop
- Tablets
- Móviles

## 🤝 Contribuciones
Si quieres mejorar RideASU:
1. Fork el proyecto
2. Crea tu rama de características
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia
Proyecto de código abierto - úsalo como quieras

## 👨‍💻 Desarrollado por
Creado con ❤️ para Asunción, Paraguay

---

**¿Preguntas?** Contáctame para cualquier consulta o sugerencia de mejora.