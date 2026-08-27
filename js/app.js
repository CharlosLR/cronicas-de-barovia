const content = document.getElementById("content");


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

function renderInicio() {

    return `
        <section class="page">

            <span class="page-eyebrow">
                Crónicas de Barovia
            </span>

            <h2>
                Bienvenidos a Barovia
            </h2>

            <p>
                Este archivo recoge aquello que hemos descubierto
                durante nuestro viaje.
            </p>

        </section>
    `;
}

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

    const data = await loadJSON("content/diario.json");

    let sesionEncontrada = null;


    for (const aventura of data.aventuras) {

        const sesion = aventura.sesiones.find(
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
                <h2>Sesión no encontrada</h2>
            </section>
        `;
    }


    const markdown = await loadMarkdown(
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

            <a href="#diario" class="back-link">
                ← Volver al Diario
            </a>

        </section>
    `;
}

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
                Personas conocidas y nombres que han comenzado a cobrar importancia.
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

            html += crearTarjetaPersonaje(personaje);

        });


        html += `
                </div>
            </div>
        `;
    }


    // Personajes por zona

    Object.entries(data.zonas).forEach(([idZona, zona]) => {

        html += `
            <div class="character-section">

                <h3>
                    ${zona.nombre}
                </h3>

                <div class="character-list">
        `;


        zona.personajes.forEach(personaje => {

            html += crearTarjetaPersonaje(
                personaje,
                idZona
            );

        });


        html += `
                </div>
            </div>
        `;

    });


    html += `
        </section>
    `;


    return html;
}

function crearTarjetaPersonaje(personaje, zona = null) {

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
                        <span>IMAGEN</span>
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

async function renderPersonaje(id, zona = null) {

    const data = await loadJSON("content/personajes.json");

    let personaje = null;


    if (zona) {

        const zonaData = data.zonas[zona];

        if (zonaData) {

            personaje = zonaData.personajes.find(
                personaje => personaje.id === id
            );

        }

    } else {

        personaje = data.clave.find(
            personaje => personaje.id === id
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


    const markdown = await loadMarkdown(
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

        html += crearTarjetaPersonaje(personaje);

    });


    html += `
            </div>
        </section>
    `;


    return html;
}

function renderPersonajesZona(data, zonaId) {

    const zona = data.zonas[zonaId];


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

        html += crearTarjetaPersonaje(
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
            <article class="bestiary-card"
                     data-route="bestiario/${criatura.id}">

                <div class="bestiary-image">
                    ${
                        criatura.imagen
                        ? `<img src="${criatura.imagen}" alt="${criatura.nombre}">`
                        : `<span>IMAGEN</span>`
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

    const data = await loadJSON("content/bestiario.json");

    const criatura = data.criaturas.find(
        criatura => criatura.id === id
    );

    if (!criatura) {
        return `
            <section class="page">
                <h2>Criatura no encontrada</h2>
            </section>
        `;
    }


    const markdown = criatura.archivo
        ? await loadMarkdown(criatura.archivo)
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
                    ${criatura.archivo
                        ? marked.parse(markdown)
                        : `<p>${markdown}</p>`
                    }
                </div>

            </div>

            <a href="#bestiario" class="back-link">
                ← Volver al Bestiario
            </a>

        </section>
    `;
}


function getCurrentView() {

    const hash = window.location.hash.substring(1);

    if (views[hash]) {
        return hash;
    }

    return "inicio";
}


function updateActiveLink(view) {

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {

        const linkView = link.getAttribute("href").substring(1);

        link.classList.toggle(
            "active",
            linkView === view
        );

    });
}


async function renderView() {

    const route = window.location.hash.substring(1) || "inicio";

    try {

        const parts = route.split("/");

        const section = parts[0];
        const id = parts[1];
        const subId = parts[2];


        switch (section) {

            case "inicio":

                content.innerHTML = renderInicio();

                break;


            case "diario":

                if (id) {

                    content.innerHTML =
                        await renderSesion(id);

                } else {

                    const data =
                        await loadJSON("content/diario.json");

                    content.innerHTML =
                        renderDiario(data);
                }

                break;


            case "bestiario":

                if (id) {

                    content.innerHTML =
                        await renderBestiarioFicha(id);

                } else {

                    const data =
                        await loadJSON("content/bestiario.json");

                    content.innerHTML =
                        renderBestiario(data);
                }

                break;


            case "personajes": {

                const data =
                    await loadJSON("content/personajes.json");


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
                else if (id === "welton" && !subId) {

                    content.innerHTML =
                        renderPersonajesZona(data, "welton");

                }

                // #personajes/welton/padre-merrikson
                else if (subId) {

                    content.innerHTML =
                        await renderPersonaje(subId, id);

                }

                // #personajes/strahd
                else {

                    content.innerHTML =
                        await renderPersonaje(id);

                }

                break;
            }

            case "mapa":

                content.innerHTML = `
                    <section class="page">
                        <span class="page-eyebrow">
                            Barovia
                        </span>

                        <h2>Mapa</h2>
                    </section>
                `;

                break;


            case "lugares":

                content.innerHTML = `
                    <section class="page">
                        <span class="page-eyebrow">
                            Barovia
                        </span>

                        <h2>Lugares</h2>
                    </section>
                `;

                break;


            case "personajes-clave":

                content.innerHTML = `
                    <section class="page">
                        <span class="page-eyebrow">
                            Personajes
                        </span>

                        <h2>Personajes clave</h2>
                    </section>
                `;

                break;


            case "objetos":

                content.innerHTML = `
                    <section class="page">
                        <span class="page-eyebrow">
                            Reliquias
                        </span>

                        <h2>Objetos</h2>
                    </section>
                `;

                break;


            case "cuaderno":

                content.innerHTML = `
                    <section class="page">
                        <span class="page-eyebrow">
                            Notas
                        </span>

                        <h2>Cuaderno</h2>
                    </section>
                `;

                break;


            default:

                content.innerHTML = `
                    <section class="page">
                        <h2>Página no encontrada</h2>
                    </section>
                `;
        }


        updateActiveLink(section);


        document
            .querySelectorAll("[data-route]")
            .forEach(card => {

                card.addEventListener("click", () => {

                    window.location.hash =
                        card.dataset.route;

                });

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


function updateActiveLink(view) {

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {

        const linkView = link.getAttribute("href").substring(1);

        link.classList.toggle(
            "active",
            linkView === view
        );

    });
}


window.addEventListener("hashchange", renderView);

renderView();


window.addEventListener("hashchange", renderView);

renderView();