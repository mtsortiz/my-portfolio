# Portfolio - Arquitectura Modular

## 🏗️ Estructura del Proyecto

### 📁 `/components`
Componentes React organizados por responsabilidad:

#### `/sections`
- `HeroSection.tsx` - Sección principal con presentación
- `AboutSection.tsx` - Información personal y tecnologías  
- `ProjectsSection.tsx` - Lista de proyectos con filtros
- `ContactSection.tsx` - Información de contacto

#### `/ui`
- `FilterButtons.tsx` - Botones de filtrado de tecnologías
- `ProjectGrid.tsx` - Grilla responsive de proyectos
- `TechnologyIcons.tsx` - Iconos de tecnologías con layout responsive
- `Navbar.tsx` - Navegación principal
- `ThemeToggle.tsx` - Alternar entre modo claro/oscuro
- `ProjectModal.tsx` - Modal con detalles de proyecto

### 📁 `/hooks`
Hooks personalizados para lógica reutilizable:

- `useScrollSpy.ts` - Actualiza URL basado en sección visible
- `useProjectFilters.ts` - Gestión de filtros de tecnología
- `useProjectModal.ts` - Estado del modal de proyectos
- `useTheme.ts` - Gestión de tema claro/oscuro

### 📁 `/types`
Definiciones de tipos TypeScript:

- `project.ts` - Interface del proyecto

### 📁 `/data`
Datos de la aplicación:

- `projects.ts` - Lista de proyectos con información completa

## ✅ Principios Aplicados

### **Separación de Responsabilidades**
- Cada componente tiene una responsabilidad única
- Lógica separada en hooks personalizados
- Datos centralizados en archivos específicos

### **Reutilización**
- Hooks reutilizables para funcionalidades comunes
- Componentes UI modulares y configurables
- Tipos TypeScript centralizados

### **Mantenibilidad**
- Estructura clara y predecible
- Archivos pequeños y enfocados
- Importaciones organizadas con archivos índice

### **Escalabilidad**
- Fácil agregar nuevas secciones o componentes
- Hooks extensibles para nueva funcionalidad
- Tipos TypeScript para desarrollo seguro

## 🔧 Uso

```typescript
// Importaciones desde índices
import { useScrollSpy, useProjectFilters } from '../hooks';
import { HeroSection, ProjectsSection } from '../components';

// Tipos centralizados
import { Project } from '../types/project';
```

## 📦 Arquitectura de Hooks

### `useScrollSpy`
- **Propósito**: Actualizar URL automáticamente al hacer scroll
- **Responsabilidad**: Observar intersección de secciones
- **Configurable**: Secciones, threshold, rootMargin

### `useProjectFilters`  
- **Propósito**: Gestionar filtrado de proyectos por tecnología
- **Responsabilidad**: Estado de filtros y proyectos filtrados
- **Reutilizable**: Funciona con cualquier array de proyectos

### `useProjectModal`
- **Propósito**: Gestionar estado del modal de proyectos
- **Responsabilidad**: Abrir/cerrar modal y proyecto seleccionado
- **Encapsulado**: Toda la lógica del modal en un lugar

## 🎨 Arquitectura de Componentes

### Secciones (`/sections`)
- Componentes de página completa
- Reciben props para configuración
- No contienen lógica de negocio

### UI (`/ui`)
- Componentes reutilizables pequeños
- Props bien definidas con TypeScript
- Enfocados en presentación

### Layout (`/`)
- Componentes de estructura general
- Navegación y elementos persistentes

Esta arquitectura permite:
- ✅ Fácil testing individual de componentes
- ✅ Desarrollo paralelo de diferentes secciones  
- ✅ Reutilización de lógica entre componentes
- ✅ Escalabilidad sin refactoring mayor
- ✅ Tipado seguro con TypeScript