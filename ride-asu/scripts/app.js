// RideASU - Main Application Logic

// Asunción coordinates
const ASUNCION_CENTER = [-25.2637, -57.5759];

// Popular locations in Asunción
const LOCATIONS = {
    'Shopping del Sol': [-25.2821, -57.5670],
    'Aeropuerto Silvio Pettirossi': [-25.2396, -57.5191],
    'Paseo La Galería': [-25.2906, -57.5793],
    'Hospital Central IPS': [-25.2797, -57.6318],
    'Terminal de Ómnibus': [-25.2714, -57.6389],
    'Costanera de Asunción': [-25.2885, -57.6284],
    'Palacio de López': [-25.2809, -57.6357],
    'Shopping Mariscal': [-25.2948, -57.5808],
    'Universidad Nacional de Asunción': [-25.2786, -57.6406],
    'Mercado 4': [-25.2858, -57.6429]
};

// Fare calculation (in Guaraníes)
const FARE_CONFIG = {
    standard: {
        baseFare: 10000,    // ₲10,000 base
        perKm: 3500,        // ₲3,500 per km
        perMinute: 500      // ₲500 per minute
    },
    comfort: {
        baseFare: 15000,    // ₲15,000 base
        perKm: 4500,        // ₲4,500 per km
        perMinute: 700      // ₲700 per minute
    },
    xl: {
        baseFare: 20000,    // ₲20,000 base
        perKm: 5500,        // ₲5,500 per km
        perMinute: 900      // ₲900 per minute
    }
};

// Global variables
let map;
let pickupMarker;
let destinationMarker;
let routeLine;
let currentRideType = 'standard';
let driverMarkers = [];
let searchingForDriver = false;

// Initialize map
function initMap() {
    map = L.map('map').setView(ASUNCION_CENTER, 13);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add click event to map
    map.on('click', handleMapClick);
    
    // Add sample drivers
    addRandomDrivers();
    
    // Update driver count
    updateDriverCount();
}

// Handle map click
function handleMapClick(e) {
    const { lat, lng } = e.latlng;
    
    // If no pickup set, set pickup
    if (!pickupMarker) {
        setPickupLocation(lat, lng);
    } 
    // If pickup set but no destination, set destination
    else if (!destinationMarker) {
        setDestinationLocation(lat, lng);
    }
}

// Set pickup location
function setPickupLocation(lat, lng, address = null) {
    if (pickupMarker) {
        map.removeLayer(pickupMarker);
    }
    
    pickupMarker = L.marker([lat, lng], {
        icon: createCustomIcon('pickup'),
        draggable: true
    }).addTo(map);
    
    pickupMarker.on('dragend', function(e) {
        const position = e.target.getLatLng();
        updateRoute();
    });
    
    if (address) {
        document.getElementById('pickup-input').value = address;
    } else {
        getAddressFromCoords(lat, lng, 'pickup-input');
    }
    
    updateRoute();
}

// Set destination location
function setDestinationLocation(lat, lng, address = null) {
    if (destinationMarker) {
        map.removeLayer(destinationMarker);
    }
    
    destinationMarker = L.marker([lat, lng], {
        icon: createCustomIcon('destination'),
        draggable: true
    }).addTo(map);
    
    destinationMarker.on('dragend', function(e) {
        const position = e.target.getLatLng();
        updateRoute();
    });
    
    if (address) {
        document.getElementById('destination-input').value = address;
    } else {
        getAddressFromCoords(lat, lng, 'destination-input');
    }
    
    updateRoute();
}

// Create custom icons
function createCustomIcon(type) {
    const colors = {
        pickup: '#10B981',
        destination: '#EF4444',
        driver: '#5046E5'
    };
    
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background: ${colors[type]};
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
}

// Get address from coordinates (simulated)
function getAddressFromCoords(lat, lng, inputId) {
    // In a real app, this would call a geocoding API
    const streets = [
        'Av. Mariscal López',
        'Av. España',
        'Av. Santísimo Sacramento',
        'Calle Palma',
        'Av. Carlos Antonio López',
        'Calle Chile',
        'Av. San Martín',
        'Calle Estrella'
    ];
    
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomNumber = Math.floor(Math.random() * 5000) + 100;
    const address = `${randomStreet} ${randomNumber}`;
    
    document.getElementById(inputId).value = address;
}

// Update route
function updateRoute() {
    if (!pickupMarker || !destinationMarker) return;
    
    // Remove existing route
    if (routeLine) {
        map.removeLayer(routeLine);
    }
    
    const pickup = pickupMarker.getLatLng();
    const destination = destinationMarker.getLatLng();
    
    // Draw simple line (in real app, would use routing API)
    routeLine = L.polyline([pickup, destination], {
        color: '#5046E5',
        weight: 4,
        opacity: 0.7
    }).addTo(map);
    
    // Fit map to show both markers
    const bounds = L.latLngBounds([pickup, destination]);
    map.fitBounds(bounds, { padding: [50, 50] });
    
    // Calculate and show fare
    calculateFare(pickup, destination);
}

// Calculate fare
function calculateFare(pickup, destination) {
    const distance = calculateDistance(pickup.lat, pickup.lng, destination.lat, destination.lng);
    const duration = Math.round(distance * 3); // Rough estimate: 3 minutes per km
    
    const config = FARE_CONFIG[currentRideType];
    const fare = config.baseFare + (distance * config.perKm) + (duration * config.perMinute);
    
    // Update UI
    document.getElementById('distance').textContent = `${distance.toFixed(1)} km`;
    document.getElementById('duration').textContent = `${duration} minutos`;
    document.getElementById('price').textContent = `₲ ${fare.toLocaleString('es-PY')}`;
    
    // Show fare estimate
    document.querySelector('.fare-estimate').style.display = 'block';
}

// Calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function toRad(deg) {
    return deg * (Math.PI/180);
}

// Add random drivers to map
function addRandomDrivers() {
    const driverCount = 15;
    
    for (let i = 0; i < driverCount; i++) {
        const lat = ASUNCION_CENTER[0] + (Math.random() - 0.5) * 0.1;
        const lng = ASUNCION_CENTER[1] + (Math.random() - 0.5) * 0.1;
        
        const driverMarker = L.marker([lat, lng], {
            icon: createDriverIcon()
        }).addTo(map);
        
        driverMarkers.push(driverMarker);
        
        // Animate drivers
        animateDriver(driverMarker);
    }
}

// Create driver icon
function createDriverIcon() {
    return L.divIcon({
        className: 'driver-marker',
        html: `<div style="
            background: #5046E5;
            width: 32px;
            height: 16px;
            border-radius: 4px;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            position: relative;
        ">
            <div style="
                position: absolute;
                top: -4px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-bottom: 4px solid #5046E5;
            "></div>
        </div>`,
        iconSize: [32, 16],
        iconAnchor: [16, 8]
    });
}

// Animate driver movement
function animateDriver(marker) {
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance of movement
            const currentPos = marker.getLatLng();
            const newLat = currentPos.lat + (Math.random() - 0.5) * 0.002;
            const newLng = currentPos.lng + (Math.random() - 0.5) * 0.002;
            marker.setLatLng([newLat, newLng]);
        }
    }, 3000);
}

// Update driver count
function updateDriverCount() {
    const count = Math.floor(Math.random() * 50) + 100;
    document.getElementById('drivers-online').textContent = count;
    
    // Update every 30 seconds
    setInterval(() => {
        const newCount = Math.floor(Math.random() * 50) + 100;
        document.getElementById('drivers-online').textContent = newCount;
    }, 30000);
}

// Request ride
function requestRide() {
    if (!pickupMarker || !destinationMarker) {
        alert('Por favor, selecciona origen y destino');
        return;
    }
    
    searchingForDriver = true;
    const btn = document.getElementById('request-ride');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Buscando conductor...</span>';
    btn.disabled = true;
    
    // Simulate finding a driver
    setTimeout(() => {
        showDriverFound();
        btn.innerHTML = '<i class="fas fa-car"></i><span>Solicitar viaje</span>';
        btn.disabled = false;
        searchingForDriver = false;
    }, 3000);
}

// Show driver found modal
function showDriverFound() {
    const drivers = [
        { name: 'Juan González', rating: 4.8, vehicle: 'Toyota Corolla Blanco', plate: 'ABC 123' },
        { name: 'María López', rating: 4.9, vehicle: 'Nissan Versa Gris', plate: 'XYZ 789' },
        { name: 'Carlos Fernández', rating: 4.7, vehicle: 'Hyundai HB20 Negro', plate: 'QWE 456' },
        { name: 'Ana Martínez', rating: 4.9, vehicle: 'Volkswagen Gol Rojo', plate: 'RTY 321' }
    ];
    
    const driver = drivers[Math.floor(Math.random() * drivers.length)];
    const arrivalTime = Math.floor(Math.random() * 5) + 2; // 2-7 minutes
    
    document.getElementById('driver-name').textContent = driver.name;
    document.getElementById('vehicle-info').textContent = `${driver.vehicle} - ${driver.plate}`;
    document.getElementById('arrival-time').textContent = `${arrivalTime} minutos`;
    
    const modal = document.getElementById('driver-modal');
    modal.style.display = 'block';
    
    // Add driver marker near pickup
    const pickup = pickupMarker.getLatLng();
    const driverLat = pickup.lat + (Math.random() - 0.5) * 0.01;
    const driverLng = pickup.lng + (Math.random() - 0.5) * 0.01;
    
    const activeDriverMarker = L.marker([driverLat, driverLng], {
        icon: createDriverIcon()
    }).addTo(map);
    
    // Animate driver approaching
    animateDriverApproach(activeDriverMarker, pickup);
}

// Animate driver approaching pickup
function animateDriverApproach(driverMarker, destination) {
    const steps = 20;
    let step = 0;
    
    const interval = setInterval(() => {
        if (step >= steps) {
            clearInterval(interval);
            return;
        }
        
        const currentPos = driverMarker.getLatLng();
        const newLat = currentPos.lat + (destination.lat - currentPos.lat) / (steps - step);
        const newLng = currentPos.lng + (destination.lng - currentPos.lng) / (steps - step);
        
        driverMarker.setLatLng([newLat, newLng]);
        step++;
    }, 500);
}

// Cancel ride
function cancelRide() {
    const modal = document.getElementById('driver-modal');
    modal.style.display = 'none';
}

// Call driver
function callDriver() {
    alert('Llamando al conductor...\n+595 981 234 567');
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    
    // Ride type selector
    document.querySelectorAll('.ride-type').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.ride-type').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentRideType = this.dataset.type;
            
            // Recalculate fare if route exists
            if (pickupMarker && destinationMarker) {
                updateRoute();
            }
        });
    });
    
    // Quick destinations
    document.querySelectorAll('.quick-destination').forEach(btn => {
        btn.addEventListener('click', function() {
            const location = this.dataset.location;
            const coords = LOCATIONS[location];
            if (coords) {
                setDestinationLocation(coords[0], coords[1], location);
            }
        });
    });
    
    // Request ride button
    document.getElementById('request-ride').addEventListener('click', requestRide);
    
    // Set default pickup to city center
    setTimeout(() => {
        setPickupLocation(ASUNCION_CENTER[0], ASUNCION_CENTER[1], 'Palacio de López');
    }, 1000);
});