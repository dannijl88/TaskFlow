# TaskFlow

Aplicación de gestión de tareas desarrollada con React y TypeScript, orientada a practicar patrones de desarrollo profesional para el mundo laboral.

## 🚀 Demo

https://task-flow-sooty-pi.vercel.app/login

## 📋 Características

- **Autenticación simulada** con login/logout y rutas protegidas
- **CRUD completo de tareas** — crear, editar, completar y eliminar
- **Estado global** con Context API y hooks personalizados
- **Filtrado de tareas** por estado: todas, pendientes y completadas
- **Estados de UI** — loading, empty state y manejo de errores
- **Edición inline** de tareas sin salir de la vista principal
- **Tests** con Vitest y React Testing Library

## 🛠️ Tecnologías

- React 19
- TypeScript
- React Router v7
- Vitest + React Testing Library
- CSS con metodología BEM
- Vite

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── layout/
│   │   └── Sidebar.tsx
│   ├── tasks/
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   └── ProtectedRoute.tsx
├── context/
│   ├── AuthContext.tsx
│   └── TaskContext.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useTasks.ts
├── pages/
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   └── NotFoundPage.tsx
├── styles/
│   ├── reset.css
│   ├── dashboard.css
│   ├── login.css
│   ├── sidebar.css
│   └── tasks.css
└── types/
    ├── auth.types.ts
    └── task.types.ts
```

## ⚙️ Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/dannijl88/taskflow

# Entrar en el directorio
cd taskflow

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

### Credenciales de acceso

```
Usuario: admin
Contraseña: 1234
```

## 🧪 Tests

```bash
npm run test
```

Los tests cubren:
- Renderizado del formulario de login
- Validación de credenciales incorrectas
- Añadir tareas
- Eliminar tareas
- Cambiar estado completado de una tarea

## 💡 Decisiones técnicas

**Context API sobre Redux** — La escala de la aplicación no justifica Redux. Context API con hooks personalizados (`useAuth`, `useTasks`) es suficiente y más sencillo de mantener.

**CSS con BEM** — Se optó por CSS puro con metodología BEM en lugar de librerías como Tailwind para practicar la organización de estilos a mano, una habilidad muy demandada en entrevistas técnicas.

**Vitest en lugar de Jest** — Al usar Vite como bundler, Vitest se integra de forma nativa sin configuración adicional y su API es compatible con Jest.

**Filtrado en el contexto** — El filtro activo y las tareas filtradas se gestionan en `TaskContext` para que cualquier componente tenga acceso sin necesidad de prop drilling.

## 👨‍💻 Daniel Juan

Desarrollado como proyecto de portfolio para practicar React profesional.
