# Fundación.EH - Sitio Web

Website profesional para ONG, basado en Gates Foundation design + Fundacion.EH Instagram content

## Tecnología

- **Next.js 14** — Framework React moderno
- **Tailwind CSS** — Estilos responsive
- **TypeScript** — Type safety

## Estructura

```
ong-website/
├── app/
│   ├── layout.tsx      (Layout principal)
│   ├── page.tsx        (Página inicio)
│   └── globals.css     (Estilos globales)
├── components/
│   ├── Header.tsx      (Navegación)
│   ├── Hero.tsx        (Sección hero)
│   ├── Mission.tsx     (Misión/Visión/Valores)
│   ├── Projects.tsx    (Proyectos)
│   ├── Impact.tsx      (Estadísticas)
│   ├── Gallery.tsx     (Galería)
│   ├── Newsletter.tsx  (Suscripción)
│   ├── Contact.tsx     (Formulario)
│   └── Footer.tsx      (Pie de página)
└── package.json        (Dependencias)
```

## Instalar

```bash
cd ong-website
npm install
npm run dev
```

Luego abre: `http://localhost:3000`

## Personalización

1. **Colores**: Cambiar azul/gris en componentes (buscar `bg-blue-600`)
2. **Textos**: Reemplazar textos placeholder con contenido real
3. **Fotos**: En `Gallery.tsx`, reemplazar placeholders con fotos reales de Instagram
4. **Contacto**: Actualizar email, teléfono, dirección en `Contact.tsx`
5. **Redes**: Links a Instagram, Facebook, LinkedIn

## Deploy

```bash
# Build para producción
npm run build
npm run start

# O subir a Vercel (recomendado para Next.js)
# - Conectar GitHub repo
# - Deploy automático
```

## Features Implementados

✅ Responsive design (mobile + desktop)
✅ Navegación smooth scroll
✅ Secciones: Hero, Misión, Proyectos, Impacto, Galería, Newsletter, Contacto
✅ Botones CTA (Donar)
✅ Formularios (contacto, suscripción)
✅ Footer con enlaces y redes
✅ SEO-friendly (meta tags)

## Próximas mejoras

- [ ] Integrar formularios con backend (email)
- [ ] Galería con fotos reales de Instagram
- [ ] Blog de artículos
- [ ] Sistema de donaciones
- [ ] Analytics (Google Tag Manager)
- [ ] Multi-idioma (es/en)
- [ ] PWA (Progressive Web App)
- [ ] Dark mode

## License

MIT - Libre para uso

---

**Diseñado por:** Claudia Bot
**Para:** Fundación.EH
**Fecha:** 2026-03-05
