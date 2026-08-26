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
                Crónica del viaje
            </span>

            <h2>
                Diario
            </h2>

            <p class="page-intro">
                Los acontecimientos que han marcado nuestro viaje,
                desde nuestra llegada a Welton hasta aquello que nos
                aguarda al otro lado de la niebla.
            </p>


            <div class="entry-group">

                <h3>
                    Los Lobos de Welton
                </h3>


                <article class="diary-entry">

                    <span class="entry-number">
                        Sesión 1
                    </span>

                    <h4>
                        Los Lobos de Welton · Parte I
                    </h4>

                    <p>
                        La historia comienza con Dragos Iorghu abandonando Barovia junto a una caravana vistani. La mujer que había aceptado ayudarle queda tan sorprendida como el resto de la caravana al comprobar que el joven ha conseguido atravesar realmente la niebla. Fieles al acuerdo alcanzado, los vistani le indican que no pueden acompañarlo más allá y continúan su viaje, dejándolo solo.
                        Mientras la niebla comienza a disiparse, Dragos contempla por primera vez un mundo libre de la opresión de Barovia. El cielo abierto, los distintos tonos de verde de los bosques, el aire limpio y la calidez del sol provocan en él una sensación completamente desconocida. Durante unos instantes queda fascinado por la simple tranquilidad del paisaje, comprendiendo hasta qué punto Barovia había moldeado su percepción de la realidad.
                        Al mismo tiempo, Asphira, Ssheresshade, Elundar y Árrel viajan hacia Welton cuando encuentran a un desconocido ajustando los cordajes de su equipo junto al camino. Tras una breve presentación, Dragos acepta unirse al grupo mientras continúan juntos hacia la villa.
                        Poco antes de alcanzar Welton encuentran a unos pastores intentando defender desesperadamente un rebaño de un ataque de lobos. Sin embargo, pronto descubren que aquellos animales no se comportan como simples depredadores.
                        Los lobos actúan con una coordinación impropia de bestias salvajes. Mientras unos distraen deliberadamente a los pastores, otros separan al rebaño y lo empujan hacia el bosque mediante maniobras perfectamente calculadas. Incluso cuando aparecen los aventureros, los animales realizan movimientos de contención para medir su capacidad antes de comprometerse en el combate.
                        Tras la muerte de cuatro lobos, la manada decide retirarse de forma organizada, sacrificando parte del botín para conservar el resto del grupo. Aunque los aventureros consiguen recuperar buena parte del ganado, varios animales permanecen dispersos por el bosque y probablemente acabarán siendo reclamados por la manada más tarde.
                        Los pastores agradecen profundamente la ayuda recibida. Cuando los aventureros comentan el extraño comportamiento de los lobos, los aldeanos reconocen que no es un hecho aislado y les hablan por primera vez de sucesos recientes relacionados con Welton, entre ellos las historias de la familia Grimstone y de los Petersen, dejando claro que la situación del pueblo lleva meses deteriorándose.
                        Al llegar a Welton, los aventureros son recibidos en la posada El Bastón del Pastor, donde la posadera enana Leanor, ya informada de lo ocurrido en el camino, decide ofrecerles alojamiento y comida como muestra de agradecimiento.
                        Durante la estancia en la taberna comienzan a manifestarse las primeras dinámicas entre los miembros del grupo. Elundar intenta convertir el enfrentamiento contra los lobos en una historia heroica protagonizada por Dragos, quien responde de forma seca y tajante, dejando claro que no desea convertirse en el centro de ninguna canción. Ssheresshade intenta ganarse unas monedas leyendo las cartas del tarot, pero su actitud distante y su imponente aspecto hacen que ningún cliente se atreva a acercarse. Mientras tanto, Árrel adopta una simple piedra como mascota improvisada y Asphira utiliza Taumaturgia para dibujarle unos pequeños ojos, convirtiéndola en objeto de varias bromas entre el grupo.
                        Mientras tanto, en una sala privada de la posada, el Concilio de Welton mantiene una acalorada discusión acerca del futuro del comercio de la villa. El padre Merrikson defiende la necesidad de suspender temporalmente el transporte de mercancías hasta solucionar el problema de los lobos, mientras que Tillus Merrion considera imprescindible mantener abiertas las rutas comerciales para evitar que la economía del pueblo colapse.
                        La llegada de los aventureros interrumpe la reunión cuando uno de los pastores informa al Concilio de que son ellos quienes han logrado contener el ataque sufrido aquella misma mañana.
                        El grupo expone las extrañas tácticas empleadas por los lobos y pregunta desde cuándo llevan comportándose de esa manera. Es entonces cuando conocen la historia de Alexi Merrikson.
                        Alexi, hermano del padre Merrikson y antiguo protector de Welton, desapareció varios meses atrás. Era un hechicero muy capaz, aunque parte de la población nunca terminó de confiar plenamente en él debido a su dominio de la magia. Algunos vecinos han comenzado a sospechar que exista alguna relación entre su desaparición y el comportamiento de los lobos. Sin embargo, el padre Merrikson rechaza con firmeza esa posibilidad, convencido de que su hermano jamás haría daño al pueblo que siempre protegió.
                        También se plantea la posibilidad de que exista un licántropo oculto en Welton, aunque los aldeanos explican que durante las últimas lunas llenas vigilaron cuidadosamente cualquier comportamiento extraño entre la población sin encontrar indicio alguno.
                        Corel, miembro del Concilio, explica que ya organizó anteriormente una expedición para localizar el cubil de los lobos o encontrar el cuerpo de Alexi, aunque regresaron sin resultados concluyentes. Las únicas pistas apuntan hacia los bosques del oeste, donde uno de los exploradores, un mediano llamado Plumarroca, sobrevivió milagrosamente a una emboscada.
                        Los aventureros solicitan hablar con él. El padre Merrikson acepta la petición y los conduce hasta una habitación de la posada donde el mediano permanece recuperándose de sus heridas.
                        Plumarroca presenta un brazo y una pierna gravemente dañados. Relata que su grupo fue emboscado por una manada de lobos que parecía haber preparado cuidadosamente la emboscada. Durante la retirada, uno de sus compañeros le rompió accidentalmente una pierna al huir, dejándolo completamente indefenso frente a la manada.
                        Lo que ocurrió después constituye el motivo por el que casi nadie cree su historia.
                        Plumarroca asegura haber escuchado claramente cómo los lobos discutían entre ellos si debían devorarlo o no. Está convencido de que aquellas criaturas hablaban como personas.
                        Finalmente, los lobos decidieron marcharse sin matarlo, permitiéndole arrastrarse de vuelta hasta Welton.
                        Aunque la mayoría de los habitantes consideran que el trauma y las heridas alteraron sus recuerdos, Asphira afirma creer completamente su testimonio. Dragos reconoce que en su tierra natal también existen lobos cuyo comportamiento resulta antinatural, aunque evita profundizar en ello. Árrel le entrega su piedra como pequeño gesto para levantarle el ánimo, mientras Ssheresshade y Elundar permanecen más distantes durante la conversación.
                        Con la información reunida, el grupo decide comenzar la investigación a la mañana siguiente. Su primer objetivo será reunirse con Corel para que les indique el lugar exacto donde se produjo la emboscada y comenzar desde allí el rastreo de la manada.
                        El día concluye con los aventureros retirándose a descansar en la posada.
                    </p>

                </article>


                <article class="diary-entry">

                    <span class="entry-number">
                        Sesión 2
                    </span>

                    <h4>
                        Los Lobos de Welton · Parte II
                    </h4>

                    <p>
                        La jornada comienza en la posada El Bastón del Pastor. Mientras Leanor sirve el desayuno a los aventureros, Corel entra en la sala con la sobriedad que lo caracteriza. Sin apenas mediar saludo, toma asiento junto al grupo y pide una ración para sí antes de interesarse por el plan que tienen para localizar el cubil de los lobos.
                        Los aventureros reconocen que únicamente disponen de un punto de partida: el lugar donde Plumarroca afirmó haber escuchado discutir a los lobos acerca de si debían devorarlo o dejarlo marchar. Su intención consiste en internarse en el bosque desde allí y confiar en encontrar algún rastro que seguir. Corel no puede ocultar su sorpresa al comprobar que un grupo contratado expresamente para cazar una manada carece de conocimientos de rastreo. Ante la sugerencia de organizar una nueva batida con los habitantes de Welton, el veterano explorador rechaza inmediatamente la idea. Nadie en el pueblo está dispuesto a volver a arriesgar su vida; precisamente por ese motivo recurrieron a aventureros. Finalmente, aunque no sin cierta resignación, acepta guiarlos personalmente a través de los bosques gracias a las décadas que lleva recorriendo aquellas montañas. Tras reunir provisiones y preparar el equipo, acuerdan encontrarse en la salida oeste de la villa.
                        A medida que el grupo se adentra en el bosque, la vegetación se vuelve más densa y el silencio más profundo. No pasa mucho tiempo antes de que Corel descubra unas profundas marcas de garras sobre la corteza de varios árboles. No pertenecen a ningún lobo. Son demasiado grandes y demasiado profundas. Poco después descubren al responsable cuando un enorme oso lechuza, gravemente herido y completamente desorientado, irrumpe entre los árboles tras estrellarse contra uno de los troncos. El animal presenta numerosas mordeduras y arañazos, además de extrañas quemaduras repartidas por parte de su cuerpo. Dominado por el dolor y la furia, carga inmediatamente contra los aventureros.
                        Tras un combate breve pero exigente, la criatura acaba cayendo. El grupo aprovecha la carne del monstruo para improvisar un pequeño descanso antes de continuar el viaje. Durante ese momento examinan con mayor detenimiento las heridas del oso lechuza y comprueban que, además de los ataques sufridos por una numerosa manada, algunas lesiones corresponden claramente a fuego, un detalle que ninguno logra explicar en ese momento.
                        La expedición reanuda la marcha hasta que una fina columna de humo emerge por encima de las copas de los árboles. Intuyendo la proximidad del campamento, Ssheresshade se adelanta en solitario aprovechando su discreción y su habilidad para moverse sin hacer ruido. No tarda en localizar la entrada del cubil de los lobos. Antes de aproximarse descubre una sencilla alarma construida con un cable y varios huesos huecos preparados para producir ruido al menor contacto. La yuan-ti consigue desactivarla sin alertar a la manada y la guarda consigo antes de continuar observando.
                        Lo que encuentra al otro lado supera cualquier expectativa. Los lobos no se comportan como bestias salvajes. Algunos conversan entre ellos con aparente tranquilidad, otros trabajan levantando una rudimentaria empalizada y varios lucen pequeños adornos de tela atados a las patas o al lomo. En el interior de la cueva incluso distingue un pequeño corral donde mantienen encerradas varias ovejas vivas. Tras contemplar aquella escena imposible, regresa junto a sus compañeros para informarles de cuanto ha visto.
                        Convencidos de que aquellas criaturas poseen verdadera inteligencia, los aventureros deciden intentar una solución pacífica. Se aproximan al asentamiento sin ocultarse y dejando claro que no albergan intenciones hostiles. La aparición de los humanos provoca una inmediata reacción de alarma entre la manada. Poco después emergen del interior de la cueva sus dos líderes.
                        El primero es Bolt, un enorme lobo gris cuyo pelaje presenta un inusual patrón atigrado de tonos azulados. A su lado aparece Flame, una loba de pelaje negro, ojos anaranjados y brillantes marcas rojizas recorriendo su cuerpo. Mientras Flame exige acabar con los intrusos del mismo modo que los humanos han cazado siempre a los suyos, Bolt adopta una actitud mucho más prudente. Aunque admite no sentir simpatía alguna por los habitantes de Welton, acepta escuchar a los recién llegados.
                        Durante la conversación, Bolt explica el origen de su extraordinaria inteligencia. Tiempo atrás la manada emboscó a un mago humano. Cuando el hechicero intentó responder con un conjuro, una descarga impredecible de magia salvaje lo alcanzó en pleno lanzamiento, desintegrándolo instantáneamente. Desde aquel accidente, tanto Bolt como Flame comenzaron a desarrollar una inteligencia imposible para cualquier animal, convirtiéndose en auténticos líderes capaces de razonar, planificar y hablar.
                        Árrel y Elundar reconocen inmediatamente la naturaleza de aquel fenómeno. Todo apunta a que el desaparecido Alexi Merrikson fue víctima de una explosión de magia salvaje que no solo acabó con su vida, sino que transfirió accidentalmente parte de su intelecto a los dos lobos alfa.
                        Bolt explica que ambos comparten el deseo de garantizar la supervivencia de la manada, aunque difieren profundamente en la forma de lograrlo. Flame está convencida de que los humanos deben ser expulsados de los bosques por la fuerza antes de que acaben exterminándolos. Bolt, por el contrario, considera que la inteligencia recibida les brinda la oportunidad de convivir evitando enfrentamientos innecesarios.
                        A partir de esa revelación, las negociaciones avanzan con rapidez. Bolt propone un acuerdo mediante el cual la manada conservaría el dominio de los bosques y, a cambio, impediría que otros grandes depredadores se establecieran en la zona, además de proteger a los pastores y sus rebaños siempre que respetasen los límites acordados. Incluso Corel acepta interceder personalmente ante el Consejo de Welton para defender aquel pacto.
                        Sin embargo, cuando el acuerdo parece sellado, Flame rompe cualquier posibilidad de entendimiento. Convencida de que la propuesta condenará el futuro de sus cachorros, se abalanza por sorpresa sobre Bolt y le desgarra el cuello antes de ordenar a la manada que mate a los aventureros. Su llamada no obtiene la respuesta esperada. Una parte de los lobos se repliega hacia el interior de la cueva en lugar de obedecerla.
                        El enfrentamiento resulta inevitable. Flame demuestra que las extrañas quemaduras halladas sobre el oso lechuza procedían de ella al exhalar violentas llamaradas contra el grupo, mientras varios lobos fieles intentan rodear a los aventureros siguiendo complejas tácticas de manada. Finalmente, Flame y los pocos seguidores que permanecen a su lado caen durante el combate.
                        Con la batalla concluida, los aventureros consiguen estabilizar las heridas de Bolt antes de que sea demasiado tarde. El viejo alfa contempla en silencio el cuerpo sin vida de quien había sido su compañera y, tras un largo instante, anuncia que el acuerdo alcanzado continúa vigente. Sin añadir una palabra más, se retira lentamente al interior de la cueva, dando por terminada la reunión.
                        De regreso a Welton, el grupo relata todo lo sucedido ante el Consejo. Convencer a los dirigentes del pueblo y explicar el extraño destino de Alexi Merrikson resulta mucho más difícil de lo esperado. Sin embargo, el testimonio de Corel termina inclinando la balanza. Aunque todavía incrédulos ante una historia tan extraordinaria, los miembros del Consejo aceptan que el problema de los lobos ha quedado resuelto y cumplen la recompensa prometida, entregando a los aventureros ochocientas piezas de oro.
                        Con la amenaza que durante meses había atormentado a Welton finalmente resuelta, el Consejo puede volver su atención hacia otros asuntos que llevaban tiempo posponiéndose. Entre ellos destaca la creciente preocupación que despierta un campamento vistani establecido en las inmediaciones del pueblo, cuyos coloridos carros, carácter festivo y dudosa reputación alimentan constantes rumores entre los vecinos. Algunos aseguran haber perdido gallinas desde su llegada; otros juran haber regresado de sus celebraciones con los bolsillos vacíos y muy pocas explicaciones. Así, cuando la paz parece haber regresado por fin a Welton, una nueva fuente de inquietud comienza lentamente a ocupar el lugar dejado por los lobos.
                    </p>

                </article>

            </div>

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

            <p class="page-intro">
                Personas conocidas durante nuestra estancia en Welton.
            </p>


            <div class="character-list">

                <article class="character-card">

                    <div class="character-image">
                        <span>IMAGEN</span>
                    </div>

                    <div class="character-info">

                        <span class="card-eyebrow">
                            Habitante de Welton
                        </span>

                        <h3>
                            Padre Merrikson
                        </h3>

                        <p>
                            Aquí irá la información del Padre Merrikson.
                        </p>

                    </div>

                </article>


                <article class="character-card">

                    <div class="character-image">
                        <span>IMAGEN</span>
                    </div>

                    <div class="character-info">

                        <span class="card-eyebrow">
                            Habitante de Welton
                        </span>

                        <h3>
                            Plumarroca
                        </h3>

                        <p>
                            Aquí irá la información de Plumarroca.
                        </p>

                    </div>

                </article>

            </div>

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

            <p class="page-intro">
                Criaturas encontradas durante nuestro viaje.
            </p>


            <div class="bestiary-list">

                <article class="bestiary-card">

                    <div class="bestiary-image">
                        <img src = "assets/images/Wow.png" alt="Wolves of Welton">
                    </div>

                    <div class="bestiary-info">

                        <span class="card-eyebrow">
                            Bestia
                        </span>

                        <h3>
                            Lobos de Welton
                        </h3>

                        <p>
                            Aquí irá la descripción de los Lobos de Welton.
                        </p>

                    </div>

                </article>


                <article class="bestiary-card">

                    <div class="bestiary-image">
                        <img src = "assets/images/Bolt.png" alt="Bolt">
                    </div>

                    <div class="bestiary-info">

                        <span class="card-eyebrow">
                            Bestia
                        </span>

                        <h3>
                            Bolt
                        </h3>

                        <p>
                            Aquí irá la descripción de Bolt.
                        </p>

                    </div>

                </article>


                <article class="bestiary-card">

                    <div class="bestiary-image">
                        <img src = "assets/images/Flame.png" alt="Flame">
                    </div>

                    <div class="bestiary-info">

                        <span class="card-eyebrow">
                            Bestia
                        </span>

                        <h3>
                            Flame
                        </h3>

                        <p>
                            Aquí irá la descripción de Flame.
                        </p>

                    </div>

                </article>

            </div>

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