#!/bin/bash

# Deploy RideASU to GitHub Pages

echo "🚀 Desplegando RideASU a GitHub Pages..."

# Inicializar git si no existe
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/tu-usuario/ride-asuncion.git
fi

# Agregar todos los archivos
git add .

# Commit
git commit -m "Deploy RideASU - Uber para Asunción"

# Push a GitHub
git push -u origin main

# Crear rama gh-pages si no existe
git checkout -b gh-pages
git push origin gh-pages

echo "✅ Desplegado! Tu app estará disponible en:"
echo "https://tu-usuario.github.io/ride-asuncion"
echo ""
echo "Recuerda:"
echo "1. Crear un repositorio en GitHub llamado 'ride-asuncion'"
echo "2. Habilitar GitHub Pages en Settings > Pages"
echo "3. Seleccionar la rama 'gh-pages'"