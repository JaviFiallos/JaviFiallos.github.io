# Portafolio Web - Javi Fiallos

Este proyecto es un portafolio personal desarrollado con React, donde se muestran mis habilidades técnicas, blandas y formas de contacto. El objetivo es presentar de manera visual y profesional mi perfil como desarrollador.

## Tecnologías utilizadas

- **React**: Librería principal para la construcción de la interfaz de usuario.
- **React Router DOM**: Para la navegación entre páginas y secciones.
- **CSS**: Estilizado personalizado para todos los componentes.
- **JavaScript**: Lógica de la aplicación y manipulación de datos.
- **GitHub Pages**: Despliegue del sitio web.

## Estructura de carpetas principal

```
JaviFiallos.github.io/
├── public/
│   └── assets/images/   # Íconos y recursos gráficos
├── src/
│   ├── components/
│   │   ├── Navbar/      # Barra de navegación
│   │   ├── introduction/ # Presentación personal
│   │   ├── Skills/      # Habilidades técnicas
│   │   ├── ContactMe/   # Formulario y datos de contacto
│   │   └── Footer/      # Pie de página
│   ├── utils/
│   │   └── data.js      # Datos de habilidades
│   ├── App.js           # Componente principal y rutas
│   └── index.js         # Punto de entrada
└── package.json         # Dependencias y scripts
```

## Secciones principales

- **Navbar**: Navegación entre secciones y acceso a la página de habilidades.
- **Introducción**: Presentación personal, intereses y tecnologías destacadas.
- **Skills**: Visualización de habilidades técnicas agrupadas en:
  - Frontend: HTML5, CSS, JavaScript, Angular
  - Backend: Java, PHP, Nest.js, Spring Boot
  - Tools: Git, Github & GitLab, GitHub Actions, SonarQube, Postman, Visual Studio Code, Netbeans
  - Bases de Datos: SQL Server, PostgreSQL, MySQL
- **Habilidades Blandas**: Comunicación efectiva, trabajo en equipo, pensamiento crítico, adaptabilidad, gestión del tiempo, resolución de problemas, liderazgo, empatía.
- **ContactMe**: Formulario de contacto y enlaces a redes sociales y correo.
- **Footer**: Pie de página con créditos.

## Instalación y ejecución local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JaviFiallos/JaviFiallos.github.io.git
   cd JaviFiallos.github.io
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm start
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue

El proyecto está configurado para desplegarse automáticamente en GitHub Pages. Para desplegar manualmente:

```bash
npm run deploy
```

## Créditos
- Desarrollado por Javi Fiallos
- Íconos y recursos visuales: [ver carpeta public/assets/images](public/assets/images)

---
¡Gracias por visitar mi portafolio! Si tienes sugerencias o deseas contactarme, utiliza el formulario en la sección de contacto.
