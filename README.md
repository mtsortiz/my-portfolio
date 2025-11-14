# 💼 Portfolio - Matías Nicolás Ortiz

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-06B6D4)

Un portfolio moderno y responsive desarrollado con Next.js, TypeScript y Tailwind CSS, que muestra mis proyectos y habilidades como desarrollador de software.

## 🚀 Demo en Vivo

🔗 **[Ver Portfolio](https://tu-portfolio-url.vercel.app)** *(Reemplaza con tu URL de Vercel)*

## ✨ Características

### 🎨 **Diseño y UX**
- **Modo Claro/Oscuro** con persistencia en localStorage
- **Efectos Glassmorphism** para un look moderno
- **Animaciones suaves** y transiciones fluidas
- **Scroll Spy** que actualiza automáticamente la URL
- **Responsive Design** optimizado para móvil, tablet y desktop

### 🛠️ **Funcionalidades**
- **Sistema de Filtros** para proyectos por tecnología
- **Modales interactivos** con detalles completos de proyectos
- **Navegación suave** entre secciones
- **Links directos** a LinkedIn, GitHub y CV
- **Iconos de tecnologías** con tooltips informativos

### 📱 **Optimizado para Móviles**
- **Layout adaptativo** con grids responsivos
- **Navegación mobile-friendly** con iconos en esquinas
- **Toggle theme** accesible desde cualquier dispositivo
- **Iconos de tecnologías** organizados en filas (4+3)

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **[Next.js 15.3.3](https://nextjs.org/)** - Framework React con SSG/SSR
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Hooks](https://reactjs.org/docs/hooks-intro.html)** - Gestión de estado y efectos

### **Arquitectura**
- **Componentes Modulares** - Separación clara de responsabilidades
- **Custom Hooks** - Lógica reutilizable encapsulada
- **TypeScript Interfaces** - Tipado seguro de datos
- **CSS Variables** - Theming dinámico

### **Deployment**
- **[Vercel](https://vercel.com/)** - Deploy automático desde Git
- **Git Integration** - Deploy continuo en cada push

## 🏗️ Arquitectura del Proyecto

```
my-portfolio/
├── 📁 components/          # Componentes React organizados
│   ├── 📁 sections/        # Secciones de página (Hero, About, etc.)
│   ├── 📁 ui/             # Componentes UI reutilizables
│   └── 📄 index.ts        # Exportaciones centralizadas
├── 📁 hooks/              # Custom hooks para lógica reutilizable
├── 📁 types/              # Definiciones TypeScript
├── 📁 data/               # Datos de proyectos y contenido
├── 📁 pages/              # Páginas de Next.js
├── 📁 styles/             # Estilos globales y CSS
└── 📁 public/             # Iconos, imágenes y assets
```

### **Principios Aplicados**
- ✅ **Separación de Responsabilidades**
- ✅ **Reutilización de Código**
- ✅ **Mantenibilidad y Escalabilidad**
- ✅ **Tipado Seguro con TypeScript**


## 📂 Componentes Principales

### **Secciones**
- `HeroSection` - Presentación principal con links sociales
- `AboutSection` - Información personal e iconos de tecnologías  
- `ProjectsSection` - Grid de proyectos con sistema de filtros
- `ContactSection` - Información de contacto y CV

### **Hooks Personalizados**
- `useScrollSpy` - Actualización automática de URL por scroll
- `useProjectFilters` - Gestión de filtros de tecnología
- `useProjectModal` - Estado del modal de proyectos
- `useTheme` - Manejo del tema claro/oscuro

## 🎨 Personalización

### **Colores y Tema**
Los colores se definen en `globals.css` usando CSS variables:

```css
:root {
  --gradient-bg: linear-gradient(...);
  --text-color: #ffffff;
  --primary-color: #3b82f6;
}
```

### **Proyectos**
Edita `data/projects.ts` para agregar/modificar proyectos:

```typescript
{
  id: 'nuevo-proyecto',
  title: 'Nombre del Proyecto', 
  description: 'Descripción detallada...',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/usuario/repo',
  type: 'web'
}
```

### **Información Personal**
Actualiza los componentes de sección para cambiar:
- Links sociales en `HeroSection`
- Descripción personal en `AboutSection` 
- Información de contacto en `ContactSection`

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px (1 columna)
- **Tablet**: 768px - 1024px (2 columnas)
- **Desktop**: > 1024px (3 columnas)

### **Características Mobile**
- Navegación adaptativa con iconos en esquinas
- Grid de tecnologías optimizado (4+3)
- Modal responsive con scroll preservado
- Toggle de tema accesible

### **Contacto**
- 📧 Email: [matiasnortiz.dev@gmail.com](mailto:matiasnortiz.dev@gmail.com)
- 💼 LinkedIn: [matias-nicolas-ortiz](https://linkedin.com/in/matias-nicolas-ortiz)
- 🐱 GitHub: [@mtsortiz](https://github.com/mtsortiz)
- 📄 CV: [Descargar CV](https://drive.google.com/file/d/19uD8ttoRBcRMhvmixjq00HgQ1-MYTXl1/view?usp=sharing)
