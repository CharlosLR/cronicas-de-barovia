const content = document.getElementById("content");


// ========================================
// CARGA DE DATOS
// ========================================

async function loadJSON(file) {

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`No se pudo cargar ${file}`);
    }

    return await response.json();
}


async function loadMarkdown(file) {

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`No se pudo cargar ${file}`);
    }

    return await response.text();
}


// ========================================
// INICIO
// ========================================

function renderInicio() {

    return `
        <section class="journal-cover">

            <img
                src="assets/images/diario-portada.png"
                alt="Crónicas de Barovia"
            >

        </section>
    `;
}


// ========================================
// DIARIO
// ========================================

function renderDiario(data) {

    let html = `
        <section class="page">

            <span class="page-eyebrow">
                Crónica del viaje
            </span>

            <h2>
                Diario
            </h2>

            <p class="page-intro">
                Los acontecimientos que han marcado nuestro viaje.
            </p>
    `;


    data.aventuras.forEach(aventura => {

        html += `
            <div class="entry-group">

                <h3>
                    ${aventura.titulo}
                </h3>
        `;


        aventura.sesiones.forEach(sesion => {

            html += `
                <article
                    class="diary-entry clickable-card"
                    data-route="diario/${sesion.id}"
                >

                    <span class="entry-number">
                        Sesión ${sesion.numero}
                    </span>

                    <h4>
                        ${sesion.titulo}
                    </h4>

                </article>
            `;

        });


        html += `
            </div>
        `;

    });


    html += `
        </section>
    `;


    return html;
}


async function renderSesion(id) {

    const data =
        await loadJSON("content/diario.json");

    let sesionEncontrada = null;


    for (const aventura of data.aventuras) {

        const sesion =
            aventura.sesiones.find(
                sesion => sesion.id === id
            );

        if (sesion) {

            sesionEncontrada = sesion;

            break;

        }

    }


    if (!sesionEncontrada) {

        return `
            <section class="page">

                <h2>
                    Sesión no encontrada
                </h2>

            </section>
        `;

    }


    const markdown =
        await loadMarkdown(
            sesionEncontrada.archivo
        );


    return `
        <section class="page">

            <span class="page-eyebrow">
                Sesión ${sesionEncontrada.numero}
            </span>

            <h2>
                ${sesionEncontrada.titulo}
            </h2>

            <article class="diary-content">
                ${marked.parse(markdown)}
            </article>

            <a
                href="#diario"
                class="back-link"
            >
                ← Volver al Diario
            </a>

        </section>
    `;
}


// ========================================
// PERSONAJES
// ========================================

function renderPersonajes(data) {

    let html = `
        <section class="page">

            <span class="page-eyebrow">
                Personajes
            </span>

            <h2>
                Personajes
            </h2>

            <p class="page-intro">
                Personas conocidas y nombres que han comenzado
                a cobrar importancia.
            </p>
    `;


    // Personajes clave

    if (data.clave.length > 0) {

        html += `
            <div class="character-section">

                <h3>
                    Personajes clave
                </h3>

                <div class="character-list">
        `;


        data.clave.forEach(personaje => {

            html +=
                crearTarjetaPersonaje(personaje);

        });


        html += `
                </div>

            </div>
        `;

    }


    // Personajes por zona

    Object.entries(data.zonas).forEach(
        ([idZona, zona]) => {

            html += `
                <div class="character-section">

                    <h3>
                        ${zona.nombre}
                    </h3>

                    <div class="character-list">
            `;


            zona.personajes.forEach(personaje => {

                html +=
                    crearTarjetaPersonaje(
                        personaje,
                        idZona
                    );

            });


            html += `
                    </div>

                </div>
            `;

        }
    );


    html += `
        </section>
    `;


    return html;
}


function crearTarjetaPersonaje(
    personaje,
    zona = null
) {

    const ruta = zona
        ? `personajes/${zona}/${personaje.id}`
        : `personajes/${personaje.id}`;


    return `
        <article
            class="character-card clickable-card"
            data-route="${ruta}"
        >

            <div class="character-image">

                ${
                    personaje.imagen
                    ? `
                        <img
                            src="${personaje.imagen}"
                            alt="${personaje.nombre}"
                        >
                    `
                    : `
                        <span>
                            IMAGEN
                        </span>
                    `
                }

            </div>

            <div class="character-info">

                <span class="card-eyebrow">
                    ${personaje.tipo}
                </span>

                <h3>
                    ${personaje.nombre}
                </h3>

            </div>

        </article>
    `;
}


async function renderPersonaje(
    id,
    zona = null
) {

    const data =
        await loadJSON("content/personajes.json");

    let personaje = null;


    if (zona) {

        const zonaData =
            data.zonas[zona];

        if (zonaData) {

            personaje =
                zonaData.personajes.find(
                    personaje =>
                        personaje.id === id
                );

        }

    } else {

        personaje =
            data.clave.find(
                personaje =>
                    personaje.id === id
            );

    }


    if (!personaje) {

        return `
            <section class="page">

                <span class="page-eyebrow">
                    Personajes
                </span>

                <h2>
                    Personaje no encontrado
                </h2>

            </section>
        `;

    }


    const markdown =
        await loadMarkdown(
            personaje.archivo
        );


    const tituloZona = zona
        ? data.zonas[zona].nombre
        : "Personaje clave";


    return `
        <section class="page">

            <span class="page-eyebrow">
                ${tituloZona}
            </span>

            <h2>
                ${personaje.nombre}
            </h2>

            <div class="character-detail">

                ${
                    personaje.imagen
                    ? `
                        <div class="character-detail-image">

                            <img
                                src="${personaje.imagen}"
                                alt="${personaje.nombre}"
                            >

                        </div>
                    `
                    : ""
                }

                <div class="character-detail-content">

                    ${marked.parse(markdown)}

                </div>

            </div>

            <a
                href="#personajes"
                class="back-link"
            >
                ← Volver a Personajes
            </a>

        </section>
    `;
}


function renderPersonajesClave(data) {

    let html = `
        <section class="page">

            <span class="page-eyebrow">
                Personajes
            </span>

            <h2>
                Personajes clave
            </h2>

            <p class="page-intro">
                Personas cuya presencia trasciende un único lugar.
            </p>

            <div class="character-list">
    `;


    data.clave.forEach(personaje => {

        html +=
            crearTarjetaPersonaje(personaje);

    });


    html += `
            </div>

        </section>
    `;


    return html;
}


function renderPersonajesZona(
    data,
    zonaId
) {

    const zona =
        data.zonas[zonaId];


    if (!zona) {

        return `
            <section class="page">

                <h2>
                    Zona no encontrada
                </h2>

            </section>
        `;

    }


    let html = `
        <section class="page">

            <span class="page-eyebrow">
                Personajes · ${zona.nombre}
            </span>

            <h2>
                ${zona.nombre}
            </h2>

            <p class="page-intro">
                Personas conocidas en ${zona.nombre}.
            </p>

            <div class="character-list">
    `;


    zona.personajes.forEach(personaje => {

        html +=
            crearTarjetaPersonaje(
                personaje,
                zonaId
            );

    });


    html += `
            </div>

        </section>
    `;


    return html;
}


// ========================================
// BESTIARIO
// ========================================

function renderBestiario(data) {

    let html = `
        <section class="page">

            <span class="page-eyebrow">
                Criaturas
            </span>

            <h2>
                Bestiario
            </h2>

            <p class="page-intro">
                Criaturas encontradas durante nuestro viaje.
            </p>

            <div class="bestiary-list">
    `;


    data.criaturas.forEach(criatura => {

        html += `
            <article
                class="bestiary-card clickable-card"
                data-route="bestiario/${criatura.id}"
            >

                <div class="bestiary-image">

                    ${
                        criatura.imagen
                        ? `
                            <img
                                src="${criatura.imagen}"
                                alt="${criatura.nombre}"
                            >
                        `
                        : `
                            <span>
                                IMAGEN
                            </span>
                        `
                    }

                </div>

                <div class="bestiary-info">

                    <span class="card-eyebrow">
                        ${criatura.tipo}
                    </span>

                    <h3>
                        ${criatura.nombre}
                    </h3>

                </div>

            </article>
        `;

    });


    html += `
            </div>

        </section>
    `;


    return html;
}


async function renderBestiarioFicha(id) {

    const data =
        await loadJSON("content/bestiario.json");


    const criatura =
        data.criaturas.find(
            criatura =>
                criatura.id === id
        );


    if (!criatura) {

        return `
            <section class="page">

                <h2>
                    Criatura no encontrada
                </h2>

            </section>
        `;

    }


    const markdown =
        criatura.archivo
        ? await loadMarkdown(
            criatura.archivo
        )
        : criatura.descripcion;


    return `
        <section class="page">

            <span class="page-eyebrow">
                Bestiario · ${criatura.tipo}
            </span>

            <h2>
                ${criatura.nombre}
            </h2>

            <div class="bestiary-detail">

                ${
                    criatura.imagen
                    ? `
                        <div class="bestiary-detail-image">

                            <img
                                src="${criatura.imagen}"
                                alt="${criatura.nombre}"
                            >

                        </div>
                    `
                    : ""
                }

                <div class="bestiary-detail-content">

                    ${
                        criatura.archivo
                        ? marked.parse(markdown)
                        : `<p>${markdown}</p>`
                    }

                </div>

            </div>

            <a
                href="#bestiario"
                class="back-link"
            >
                ← Volver al Bestiario
            </a>

        </section>
    `;
}

// ========================================
// MAPAS
// ========================================

function renderMapas(data) {

    let html = `
        <section class="page">

            <span class="page-eyebrow">
                Barovia
            </span>

            <h2>
                Mapas
            </h2>

            <p class="page-intro">
                Mapas y representaciones de las tierras conocidas.
            </p>

            <div class="bestiary-list">
    `;

    data.mapas.forEach(mapa => {

        html += `
            <article
                class="bestiary-card clickable-card"
                data-route="mapas/${mapa.id}"
            >

                <div class="bestiary-image">

                    ${
                        mapa.imagen
                        ? `
                            <img
                                src="${mapa.imagen}"
                                alt="${mapa.nombre}"
                            >
                        `
                        : `
                            <span>
                                IMAGEN
                            </span>
                        `
                    }

                </div>

                <div class="bestiary-info">

                    <span class="card-eyebrow">
                        ${mapa.tipo}
                    </span>

                    <h3>
                        ${mapa.nombre}
                    </h3>

                </div>

            </article>
        `;

    });

    html += `
            </div>

        </section>
    `;

    return html;
}

async function renderMapaFicha(id) {

    const data =
        await loadJSON("content/mapas.json");

    const mapa =
        data.mapas.find(
            mapa => mapa.id === id
        );

    if (!mapa) {

        return `
            <section class="page">

                <h2>
                    Mapa no encontrado
                </h2>

            </section>
        `;

    }

    const contenido =
        await loadMarkdown(mapa.archivo);

    return `
        <section class="page">

            <a
                href="#mapas"
                class="back-link"
            >
                &lt;&lt; Volver
            </a>

            <span class="page-eyebrow">
                ${mapa.tipo}
            </span>

            <h2>
                ${mapa.nombre}
            </h2>

            ${
                mapa.imagen
                ? `
                    <div class="bestiary-detail-image">

                        <img
                            src="${mapa.imagen}"
                            alt="${mapa.nombre}"
                        >

                    </div>
                `
                : ""
            }

            <div class="diary-content">
                ${contenido}
            </div>

        </section>
    `;
}

// ========================================
// LUGARES
// ========================================

async function renderLugares() {

    const data =
        await loadJSON("content/lugares.json");

    return `
        <section class="page">

            <span class="page-eyebrow">
                Barovia
            </span>

            <h2>
                Lugares
            </h2>

            <p class="page-intro">
                Lugares conocidos y regiones descubiertas durante el viaje.
            </p>

            <div class="cards-grid">

                ${data.lugares.map(lugar => `

                    <article
                        class="bestiary-card clickable-card"
                        data-route="lugares/${lugar.id}"
                    >

                        <div class="bestiary-image">

                            ${
                                lugar.imagen
                                ? `
                                    <img
                                        src="${lugar.imagen}"
                                        alt="${lugar.nombre}"
                                    >
                                `
                                : `
                                    <span>
                                        IMAGEN
                                    </span>
                                `
                            }

                        </div>

                        <div class="bestiary-info">

                            <span class="card-eyebrow">
                                ${lugar.tipo}
                            </span>

                            <h3>
                                ${lugar.nombre}
                            </h3>

                        </div>

                    </article>

                `).join("")}

            </div>

        </section>
    `;
}

async function renderLugarFicha(id) {

    const data =
        await loadJSON("content/lugares.json");

    let lugarEncontrado = null;
    let lugarPadre = null;

    // Buscar lugares principales
    for (const lugar of data.lugares) {

        if (lugar.id === id) {

            lugarEncontrado = lugar;
            break;

        }

        // Buscar lugares internos
        if (lugar.lugares) {

            const subLugar =
                lugar.lugares.find(
                    sub => sub.id === id
                );

            if (subLugar) {

                lugarEncontrado = subLugar;
                lugarPadre = lugar;

                break;

            }
        }
    }

    // Lugar no encontrado
    if (!lugarEncontrado) {

        return `
            <section class="page">

                <h2>
                    Lugar no encontrado
                </h2>

            </section>
        `;
    }

    // Cargar Markdown
    const markdown =
        await loadMarkdown(
            lugarEncontrado.archivo
        );

    // Determinar a dónde vuelve el botón
    const volverA =
        lugarPadre
            ? `lugares/${lugarPadre.id}`
            : "lugares";

    return `
        <section class="page">

            <a
                href="#${volverA}"
                class="back-link"
            >
                &lt;&lt; Volver
            </a>

            ${
                lugarEncontrado.imagen
                    ? `
                        <div class="bestiary-detail-image">

                            <img
                                src="${lugarEncontrado.imagen}"
                                alt="${lugarEncontrado.nombre}"
                            >

                        </div>
                    `
                    : ""
            }

            <span class="page-eyebrow">
                ${lugarEncontrado.tipo}
            </span>

            <h2>
                ${lugarEncontrado.nombre}
            </h2>

            <article class="diary-content">
                ${marked.parse(markdown)}
            </article>

            ${
                lugarEncontrado.lugares &&
                lugarEncontrado.lugares.length > 0
                    ? `

                        <section class="subplaces">

                            <h3>
                                Lugares relevantes
                            </h3>

                            <div class="cards-grid">

                                ${lugarEncontrado.lugares
                                    .map(subLugar => `

                                        <article
                                            class="bestiary-card clickable-card"
                                            data-route="lugares/${subLugar.id}"
                                        >

                                            <div class="bestiary-image">

                                                ${
                                                    subLugar.imagen
                                                        ? `
                                                            <img
                                                                src="${subLugar.imagen}"
                                                                alt="${subLugar.nombre}"
                                                            >
                                                        `
                                                        : ""
                                                }

                                            </div>

                                            <div class="bestiary-info">

                                                <span class="card-eyebrow">
                                                    ${subLugar.tipo}
                                                </span>

                                                <h3>
                                                    ${subLugar.nombre}
                                                </h3>

                                            </div>

                                        </article>

                                    `)
                                    .join("")}

                            </div>

                        </section>

                    `
                    : ""
            }

        </section>
    `;
}

// ========================================
// OBJETOS
// ========================================

function renderObjetos(data) {

    let html = `
        <section class="page">

            <span class="page-eyebrow">
                Barovia
            </span>

            <h2>
                Objetos
            </h2>

            <p class="page-intro">
                Objetos y reliquias encontrados durante el viaje.
            </p>

            <div class="bestiary-list">
    `;

    data.objetos.forEach(objeto => {

        html += `
            <article
                class="bestiary-card clickable-card"
                data-route="objetos/${objeto.id}"
            >

                <div class="bestiary-image">

                    ${
                        objeto.imagen
                        ? `
                            <img
                                src="${objeto.imagen}"
                                alt="${objeto.nombre}"
                            >
                        `
                        : `
                            <span>
                                IMAGEN
                            </span>
                        `
                    }

                </div>

                <div class="bestiary-info">

                    <span class="card-eyebrow">
                        ${objeto.tipo}
                    </span>

                    <h3>
                        ${objeto.nombre}
                    </h3>

                </div>

            </article>
        `;

    });

    html += `
            </div>

        </section>
    `;

    return html;
}

// ========================================
// CUADERNO
// ========================================

function renderCuaderno(data) {

    let html = `
        <section class="page">

            <span class="page-eyebrow">
                Notas
            </span>

            <h2>
                Cuaderno
            </h2>

            <p class="page-intro">
                Rumores, pistas y asuntos que merecen ser recordados.
            </p>

            <div class="notebook-list">
    `;

    data.entradas.forEach(entrada => {

        html += `
            <article
                class="notebook-entry clickable-card"
                data-route="cuaderno/${entrada.id}"
            >

                <div class="notebook-entry-header">

                    <span class="card-eyebrow">
                        ${entrada.tipo}
                    </span>

                    <span class="notebook-status">
                        ${entrada.estado}
                    </span>

                </div>

                <h3>
                    ${entrada.titulo}
                </h3>

            </article>
        `;

    });

    html += `
            </div>

        </section>
    `;

    return html;
}

async function renderCuadernoFicha(id) {

    const data =
        await loadJSON("content/cuaderno.json");

    const entrada =
        data.entradas.find(
            entrada => entrada.id === id
        );

    if (!entrada) {

        return `
            <section class="page">

                <span class="page-eyebrow">
                    Notas
                </span>

                <h2>
                    Entrada no encontrada
                </h2>

            </section>
        `;

    }

    const markdown =
        await loadMarkdown(
            entrada.archivo
        );

    return `
        <section class="page">

            <a
                href="#cuaderno"
                class="back-link"
            >
                ← Volver al Cuaderno
            </a>

            <div class="notebook-entry-detail">

                <div class="notebook-entry-header">

                    <span class="card-eyebrow">
                        ${entrada.tipo}
                    </span>

                    <span class="notebook-status">
                        ${entrada.estado}
                    </span>

                </div>

                <h2>
                    ${entrada.titulo}
                </h2>

                <div class="diary-content">
                    ${marked.parse(markdown)}
                </div>

            </div>

        </section>
    `;
}

// ========================================
// NAVEGACIÓN
// ========================================

function updateActiveLink(view) {

    const links =
        document.querySelectorAll(".nav-link");


    links.forEach(link => {

        const linkView =
            link
                .getAttribute("href")
                .substring(1);


        link.classList.toggle(
            "active",
            linkView === view
        );

    });
}

async function renderObjetoFicha(id) {

    const data =
        await loadJSON("content/objetos.json");

    const objeto =
        data.objetos.find(
            objeto => objeto.id === id
        );

    if (!objeto) {

        return `
            <section class="page">

                <h2>
                    Objeto no encontrado
                </h2>

            </section>
        `;

    }

    const contenido =
        await loadMarkdown(objeto.archivo);

    return `
        <section class="page">

            <a
                href="#objetos"
                class="back-link"
            >
                &lt;&lt; Volver
            </a>

            <span class="page-eyebrow">
                ${objeto.tipo}
            </span>

            <h2>
                ${objeto.nombre}
            </h2>

            ${
                objeto.imagen
                ? `
                    <div class="bestiary-detail-image">

                        <img
                            src="${objeto.imagen}"
                            alt="${objeto.nombre}"
                        >

                    </div>
                `
                : ""
            }

            <div class="diary-content">
                ${contenido}
            </div>

        </section>
    `;
}

// ========================================
// ROUTER
// ========================================

async function renderView() {

    const route =
        window.location.hash.substring(1)
        || "inicio";


    try {

        const parts =
            route.split("/");

        const section =
            parts[0];

        const id =
            parts[1];

        const subId =
            parts[2];


        switch (section) {

            // ----------------------------
            // INICIO
            // ----------------------------

            case "inicio":

                content.innerHTML =
                    renderInicio();

                break;


            // ----------------------------
            // DIARIO
            // ----------------------------

            case "diario":

                if (id) {

                    content.innerHTML =
                        await renderSesion(id);

                } else {

                    const data =
                        await loadJSON(
                            "content/diario.json"
                        );

                    content.innerHTML =
                        renderDiario(data);

                }

                break;


            // ----------------------------
            // BESTIARIO
            // ----------------------------

            case "bestiario":

                if (id) {

                    content.innerHTML =
                        await renderBestiarioFicha(id);

                } else {

                    const data =
                        await loadJSON(
                            "content/bestiario.json"
                        );

                    content.innerHTML =
                        renderBestiario(data);

                }

                break;


            // ----------------------------
            // PERSONAJES
            // ----------------------------

            case "personajes": {

                const data =
                    await loadJSON(
                        "content/personajes.json"
                    );


                // #personajes

                if (!id) {

                    content.innerHTML =
                        renderPersonajes(data);

                }


                // #personajes/clave

                else if (id === "clave") {

                    content.innerHTML =
                        renderPersonajesClave(data);

                }


                // #personajes/welton

                else if (
                    id === "welton"
                    && !subId
                ) {

                    content.innerHTML =
                        renderPersonajesZona(
                            data,
                            "welton"
                        );

                }

                // #personajes/vistani

                else if (
                    id === "vistani"
                    && !subId
                ) {

                    content.innerHTML =
                        renderPersonajesZona(
                            data,
                            "vistani"
                        );

                }

                // #personajes/villaBarovia

                else if (
                    id === "villaBarovia"
                    && !subId
                ) {

                    content.innerHTML =
                        renderPersonajesZona(
                            data,
                            "villaBarovia"
                        );

                }


                // #personajes/welton/padre-merrikson

                else if (subId) {

                    content.innerHTML =
                        await renderPersonaje(
                            subId,
                            id
                        );

                }


                // #personajes/strahd

                else {

                    content.innerHTML =
                        await renderPersonaje(id);

                }


                break;

            }


            // ----------------------------
            // MAPAS
            // ----------------------------

            case "mapas":

                if (id) {

                    content.innerHTML =
                        await renderMapaFicha(id);

                } else {

                    const data =
                        await loadJSON(
                            "content/mapas.json"
                        );

                    content.innerHTML =
                        renderMapas(data);

                }

                break;


            // ----------------------------
            // LUGARES
            // ----------------------------

            case "lugares":

                if (id) {

                    content.innerHTML =
                        await renderLugarFicha(id);

                } else {

                    content.innerHTML =
                        await renderLugares();

                }

                break;


            // ----------------------------
            // PERSONAJES CLAVE
            // ----------------------------

            case "personajes-clave":

                content.innerHTML = `
                    <section class="page">

                        <span class="page-eyebrow">
                            Personajes
                        </span>

                        <h2>
                            Personajes clave
                        </h2>

                    </section>
                `;

                break;


            // ----------------------------
            // OBJETOS
            // ----------------------------

            case "objetos":

                if (id) {

                    content.innerHTML =
                        await renderObjetoFicha(id);

                } else {

                    const data =
                        await loadJSON(
                            "content/objetos.json"
                        );

                    content.innerHTML =
                        renderObjetos(data);

                }

                break;


            // ----------------------------
            // CUADERNO
            // ----------------------------

            case "cuaderno":

                if (id) {

                    content.innerHTML =
                        await renderCuadernoFicha(id);

                } else {

                    const data =
                        await loadJSON(
                            "content/cuaderno.json"
                        );

                    content.innerHTML =
                        renderCuaderno(data);

                }

                break;


            // ----------------------------
            // ERROR
            // ----------------------------

            default:

                content.innerHTML = `
                    <section class="page">

                        <h2>
                            Página no encontrada
                        </h2>

                    </section>
                `;

        }


        // Actualizar enlace activo

        updateActiveLink(section);


        // Activar tarjetas

        document
            .querySelectorAll("[data-route]")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        window.location.hash =
                            card.dataset.route;

                    }
                );

            });


    } catch (error) {

        console.error(error);


        content.innerHTML = `
            <section class="page">

                <span class="page-eyebrow">
                    Error
                </span>

                <h2>
                    La niebla lo oculta todo
                </h2>

                <p>
                    No ha sido posible cargar esta sección.
                </p>

            </section>
        `;

    }

}


// ========================================
// CAMBIO DE PÁGINA
// ========================================

window.addEventListener(
    "hashchange",
    renderView
);


renderView();


// ========================================
// MENÚ MÓVIL
// ========================================

const mobileMenuButton =
    document.getElementById(
        "mobile-menu-button"
    );

const sidebar =
    document.querySelector(
        ".sidebar"
    );

const navigation =
    document.querySelector(
        ".navigation"
    );


// Abrir / cerrar menú

if (
    mobileMenuButton
    && sidebar
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "mobile-menu-open"
            );

        }
    );

}


// Cerrar menú al seleccionar una opción

if (
    navigation
    && sidebar
) {

    navigation.addEventListener(
        "click",
        event => {

            const link =
                event.target.closest(
                    ".nav-link"
                );


            if (!link) {
                return;
            }


            sidebar.classList.remove(
                "mobile-menu-open"
            );

        }
    );

}