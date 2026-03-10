#!/bin/bash
# Script para volver al modo claro si no te gusta el modo oscuro

echo "Revirtiendo al modo claro..."
cp index_LIGHT_MODE_BACKUP.html index.html
git add index.html
git commit -m "Revert to light mode"
git push origin gh-pages
echo "¡Listo! El sitio está de vuelta en modo claro."