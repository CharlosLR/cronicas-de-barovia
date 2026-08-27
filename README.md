# Crónicas de Barovia

> *Memorias de quienes cruzaron la niebla*

Una página web interactiva dedicada a documentar la campaña de **Dungeons & Dragons** ambientada en el reino de Barovia, basada en el módulo *Curse of Strahd* (La Maldición de Strahd).

## 📖 Contenido

El sitio organiza la información de la campaña en las siguientes secciones:

- **Diario** - Crónica de los eventos y aventuras de los personajes
- **Mapa** - Representación visual de las ubicaciones en Barovia
- **Lugares** - Descripción detallada de sitios importantes
- **Personajes** - Perfiles de personajes clave y figuras importantes
  - Personajes clave de la campaña
  - Habitantes de Welton
- **Bestiario** - Catálogo de criaturas y enemigos encontrados
- **Objetos** - Registro de artefactos y objetos mágicos
- **Cuaderno** - Notas y referencias adicionales

## 🚀 Características

- Interfaz de navegación lateral intuitiva
- Contenido dinámico cargado desde archivos Markdown y JSON
- Diseño responsivo y orientado a dispositivos móviles
- Galería de imágenes de personajes
- Soporte para renderizado de Markdown

## 💻 Tecnología

Este proyecto está construido con:

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo
- **JavaScript** - Interactividad y carga dinámica de contenido
- **Marked.js** - Procesamiento de Markdown

## 📁 Estructura del Proyecto

```
cronicas-de-barovia/
├── index.html                 # Página principal
├── css/
│   └── style.css             # Estilos del sitio
├── js/
│   └── app.js                # Lógica de la aplicación
├── assets/
│   └── images/               # Imágenes de personajes y otros recursos
├── content/
│   ├── personajes.json       # Catálogo de personajes
│   └── personajes/           # Perfiles individuales en Markdown
└── README.md                 # Este archivo
```

## 🛠️ Instalación y Uso

### Opción 1: Ver en línea
Si el proyecto está desplegado en GitHub Pages, simplemente abre el sitio en tu navegador.

### Opción 2: Ejecutar localmente
1. Clona el repositorio:
   ```bash
   git clone https://github.com/CharlosLR/cronicas-de-barovia.git
   cd cronicas-de-barovia
   ```

2. Abre `index.html` en tu navegador (o usa un servidor local):
   ```bash
   python -m http.server 8000
   # Luego abre http://localhost:8000 en tu navegador
   ```

## 📝 Cómo Contribuir

Para agregar nuevo contenido:

1. Crear un archivo Markdown en `content/personajes/` o la sección correspondiente
2. Actualizar el archivo JSON correspondiente con la referencia al nuevo contenido
3. Agregar la imagen del personaje o recurso en `assets/images/`
4. Hacer commit de los cambios

## 📖 Referencias

- [Curse of Strahd - Módulo oficial de D&D](https://www.dndbeyond.com/marketplace/adventures/curse-of-strahd)
- [Dungeons & Dragons 5ª Edición](https://www.dndbeyond.com)

## 📜 Licencia

Este proyecto es un documento personal de campaña. Los derechos de Dungeons & Dragons pertenecen a Wizards of the Coast.

---

*"Yo soy el Antiguo. Yo soy la Tierra."*
