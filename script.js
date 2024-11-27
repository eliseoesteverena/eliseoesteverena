const estudio = document.querySelector(".estudio5");
const page = document.querySelector(".page");
const web = document.getElementById("serviceWeb");
const marca = document.getElementById("serviceMarca");
const homeBtn = document.querySelector(".home-btn");


let initial = ` <div class="container header">
                    <img src="me.webp">
                    <h1>Eliseo Esteverena</h1>
                    <h3>Soluciones digitales</h3>
                </div>
                <div class="container">
                    <div>
                        <div class="service" id="serviceWeb">> <span>Desarrollo web a medida</span></div>
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
                        <h2>Desarrollo Web a Medida: Sitios Únicos para Empresas Únicas</h2>
                        <p>En un mercado saturado de soluciones genéricas y plantillas, lo que realmente diferencia a un negocio es un sitio web a medida, diseñado específicamente para reflejar su identidad única y satisfacer sus necesidades particulares. Más que un conjunto de páginas, un sitio web personalizado es una extensión digital de tu marca, donde cada elemento habla de lo que tu empresa representa.</p>
                        <p><strong class="block">¿Por qué necesitas un desarrollo a medida?</strong> Porque tu negocio no es como los demás. Las plantillas prediseñadas no siempre capturan la esencia de tu marca ni ofrecen la flexibilidad para adaptarse a tus objetivos específicos. Con un <strong>desarrollo web a medida</strong>, se construye una experiencia única, funcional y optimizada, que no solo atrae a tus clientes, sino que los convierte en fieles defensores de tu marca.</p>
                        <p>El proceso inicial de desarrollo incluye un análisis profundo de tus metas, tu público y tu sector, para crear un diseño resultante que no solo sea atractivo, sino estratégico. Además, se asegura la integración perfecta de todas las funcionalidades que tu empresa necesite, como <strong>catálogos, formularios personalizados, sistemas de gestión de contenido</strong> o cualquier herramienta clave.</p>
                        <p>Un sitio web a medida no es solo un diseño, es una inversión en el futuro de tu negocio. <strong>Es la diferencia entre simplemente estar en línea o destacar en ella.</strong> <a onclick="formContact()">Contáctame</a> y llevemos tu marca al siguiente nivel.</p>
                    </section>`;
let marcaSection = `<section>
                        <h2>Desarrollo de Marca: Haz que tu Negocio Destaque</h2>
                        <p>Toda empresa tiene una historia que contar, pero no todas saben cómo hacerlo de manera que resuene con su audiencia. Tu negocio necesita una marca que no solo sea visualmente atractiva, sino que conecte profundamente con las emociones y valores de tus clientes. Una marca efectiva va más allá de un logotipo: es la identidad que te posiciona en el mercado, el mensaje que comunica tu propósito y la experiencia que construye relaciones duraderas.</p>
                        <p><strong>¿Por qué lo necesitas?</strong> Porque en un entorno donde las opciones son infinitas, lo que diferencia a una empresa exitosa es su capacidad para destacarse. Una marca bien construida no solo atrae clientes; genera confianza, fidelidad y, lo más importante, resultados sostenibles.</p>
                        <p>El desarrollo de marca comienza con un profundo entendimiento de tu negocio y tu público objetivo. Juntos, trabajaremos para identificar lo que hace único a tu proyecto, construir una identidad visual y verbal que lo represente, y desarrollar estrategias que comuniquen tus valores de manera clara y memorable.</p>
                        <p>Ya sea que estés iniciando o necesites reinventarte, crear una marca sólida es la clave para alcanzar tus metas. <strong>¡Empecemos hoy mismo!</strong> Construyamos una marca que inspire, conecte y deje una impresión duradera. <a onclick="formContact()">Contáctame</a> para comenzar.</p>
                    </section>`;		
let contactoSection = `<iframe src="contact-frame.html"></iframe>`;		

    page.innerHTML = initial;

setTimeout(() => {
    estudio.style.opacity = "1";
    page.style.opacity = "1";
}, 100);

const assignListeners = () => {
    document.getElementById("serviceWeb").addEventListener("click", () => {
        page.style.opacity = "0";
        setTimeout(() => {
            page.innerHTML = webSection;
            page.style.opacity = "1";
            homeBtn.style.display = "flex";
        }, 300);
    });
    document.getElementById("serviceMarca").addEventListener("click", () => {
        page.style.opacity = "0";
        setTimeout(() => {
            page.innerHTML = marcaSection;
            page.style.opacity = "1";
            homeBtn.style.display = "flex";
        }, 300);
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