const page = document.querySelector(".page");
const web = document.getElementById("serviceWeb");
const marca = document.getElementById("serviceMarca");
const homeBtn = document.querySelector(".home-btn");


let initial = ` <div class="container header">
                    <img src="me.webp">
                    <h1>Eliseo Esteverena</h1>
                    <h2>Soluciones digitales</h2>
                </div>
                <div class="container">
                    <div>
                        <div class="service" id="serviceWeb">> <span>Desarrollo Web</span></div>
                        <div class="service" id="serviceMarca">> <span>Desarrollo de Marca</span></div>
                    </div>
                    <div style="display: flex;align-items: center;justify-content: center;">
                        <a class="btn" href="https://wa.me/5491166699193?text=" target="_blank">
                            <i class="w-app">
                            </i>
                            11 6669 9193
                        </a>
                    </div>
                </div>
                <div class="container"><i class="separator">&#32;</i></div>
                <div class="container footer">
                    <div>
                        <a href="/" class="link">
                            <i class="page">&#32;</i>
                            eliseoesteverena.dev
                        </a>
                        <a href="mailto:contacto@eliseoesteverena.dev" class="link">
                            <i class="mail">&#32;</i>
                            contacto&#64;eliseoesteverena.dev
                        </a>

                    </div>
                    <div></div>
                </div>`;
let webSection = `<section>
                        <h2>Desarrollo Web Profesional</h2>
                        <p>En el mundo digital, un sitio web bien diseñado marca la diferencia. Te ayudo a crear una página web que destaque, conecte con tu audiencia y cumpla tus objetivos, ya sea una tienda online, un blog, un portafolio o una web corporativa.</p>
                        <p>Cada proyecto se debe enfocar en ofrecer un diseño atractivo, una experiencia de usuario intuitiva y una velocidad más que óptima. Además, la optimización para dispositivos móviles y motores de búsqueda garantiza mayor visibilidad y posicionamiento.</p>
                        <p>Haz crecer tu negocio con una presencia en línea sólida y profesional. <a onclick="formContact()">Contáctame</a> para convertir tu idea en una realidad online.</p>
                    </section>`;
let marcaSection = `<section>
                        <h2>Construcción de Marca Memorable y Única</h2>
                        <p>Una marca poderosa no es solo un logo, sino una identidad sólida que conecte con las personas. Estoy aquí para ayudarte a definir qué hace única a tu marca, cómo deseas que te perciban y qué emociones quieres generar.</p>
                        <p>La elección de colores, tipografías, mensajes y elementos gráficos se alinea con tus valores para construir una presencia memorable y relevante. Cada detalle está diseñado pensando en diferenciarte y posicionarte con fuerza en el mercado.</p>
                        <p>Empieza o renueva tu imagen con una estrategia clara y efectiva. <strong>¡Dale vida a tu marca!</strong> <a onclick="formContact()">Hablemos</a> y hagamos que tu identidad destaque.</p>
                    </section>`;		
let contactoSection = `<iframe src="contact-frame.html"></iframe>`;		

page.innerHTML = initial;

const assignListeners = () => {
    document.getElementById("serviceWeb").addEventListener("click", () => {
        page.innerHTML = webSection;
        homeBtn.style.display = "flex";
    });
    document.getElementById("serviceMarca").addEventListener("click", () => {
        page.innerHTML = marcaSection;
        homeBtn.style.display = "flex";
    });
};

homeBtn.addEventListener("click", () => {
    page.innerHTML = initial;
    homeBtn.style.display = "none";
    assignListeners(); // Reasignar listeners después de reemplazar el contenido
});

assignListeners(); // Asignar listeners al cargar la página por primera vez


function formContact() {
    document.querySelector(".page").innerHTML = contactoSection;
    document.querySelector(".home-btn").style.display = "flex";
}
const message = document.querySelector(".success-message");

if(window.location.search == "?m=thanks"){ 
    message.style.display = "flex";
    setInterval(removeNode, 3000);
}
function removeNode() {
    message.remove()
}