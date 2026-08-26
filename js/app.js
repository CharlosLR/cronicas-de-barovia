const content = document.getElementById("content");

const views = {

    inicio: `
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
    `,


    diario: `
        <section class="page">

            <span class="page-eyebrow">
                Crónica
            </span>

            <h2>
                Diario
            </h2>

            <p>
                Aquí quedará registrada la historia de nuestro viaje.
            </p>

        </section>
    `,


    mapa: `
        <section class="page">

            <span class="page-eyebrow">
                Barovia
            </span>

            <h2>
                Mapa
            </h2>

            <p>
                Todavía no conocemos estas tierras.
            </p>

        </section>
    `,


    lugares: `
        <section class="page">

            <span class="page-eyebrow">
                Barovia
            </span>

            <h2>
                Lugares
            </h2>

            <p>
                Lugares descubiertos durante nuestro viaje.
            </p>

        </section>
    `,


    "personajes-clave": `
        <section class="page">

            <span class="page-eyebrow">
                Personajes
            </span>

            <h2>
                Personajes clave
            </h2>

            <p>
                Las personas cuyos nombres han comenzado a aparecer
                una y otra vez en nuestras historias.
            </p>

        </section>
    `,


    welton: `
        <section class="page">

            <span class="page-eyebrow">
                Personajes · Welton
            </span>

            <h2>
                Welton
            </h2>

            <p>
                Personas conocidas durante nuestra estancia en Welton.
            </p>

        </section>
    `,


    bestiario: `
        <section class="page">

            <span class="page-eyebrow">
                Criaturas
            </span>

            <h2>
                Bestiario
            </h2>

            <p>
                Criaturas encontradas durante nuestro viaje.
            </p>

        </section>
    `,


    objetos: `
        <section class="page">

            <span class="page-eyebrow">
                Reliquias
            </span>

            <h2>
                Objetos
            </h2>

            <p>
                Objetos cuyo significado o procedencia merece ser recordado.
            </p>

        </section>
    `,


    cuaderno: `
        <section class="page">

            <span class="page-eyebrow">
                Notas
            </span>

            <h2>
                Cuaderno
            </h2>

            <p>
                Pistas, rumores, preguntas y teorías.
            </p>

        </section>
    `
};


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


function renderView() {

    const view = getCurrentView();

    content.innerHTML = views[view];

    updateActiveLink(view);
}


window.addEventListener("hashchange", renderView);

renderView();