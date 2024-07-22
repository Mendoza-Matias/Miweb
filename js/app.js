const srCards = document.getElementById("services-cards")
const iconsAbout = document.getElementById("icons-about")
const information = [
    {   
        id:"c-1",
    },
    {   
        id:"c-2"
    }
]

const iAbout = [
    {
        "titulo": "Adaptado al cliente",
        "texto": "Sitios web personalizados que satisfacen tus necesidades únicas con diseño atractivo y funcionalidad óptima.",
        "img": "./assets/icon1.png"
    },
    {
        "titulo": "Trabajo rápido y de calidad",
        "texto": "Entrega eficiente de proyectos web de alta calidad, garantizando resultados excepcionales en tiempo récord.",
        "img": "./assets/icon2.png"
    },
    {
        "titulo": "Responsabilidad",
        "texto": "Compromiso total en cada proyecto para asegurar la satisfacción y confianza del cliente en todo momento.",
        "img": "./assets/icon3.png"
    }
]



information.forEach(info => {
    const div = document.createElement("div")
    div.className = `card ${info.id}`
    srCards.append(div)
});

iAbout.forEach(iInfo => {
    const div = document.createElement("div")
    div.className = "icon-about"
    div.innerHTML = `<img src=${iInfo.img} alt="Icono">
                <div class="icon-text">
                    <h3>${iInfo.titulo}</h3>
                    <p>${iInfo.texto}</p>
                </div>`
    iconsAbout.append(div)
})