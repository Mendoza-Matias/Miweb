const srCards = document.getElementById("services-cards")
const iconsAbout = document.getElementById("icons-about")
const iModels = document.getElementById("models")

const information = [
    {
        id: "c-1",
    },
    {
        id: "c-2"
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

const model = [
    {
        id: 1,
        titulo: "Web de Gimnasio",
        img: "https://cdn.discordapp.com/attachments/1197885080719339651/1265767815911313428/Captura_desde_2024-07-24_17-27-58.png?ex=66a2b5a4&is=66a16424&hm=00350947bbfa63387fc96e83101c2d019aad851dd4a70fe0c4571b95228f9e09&",
        link: "https://gym-inky-beta.vercel.app/"
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

model.forEach(m => {
    const div = document.createElement("div");
    div.className = "content-porfolio"
    div.innerHTML =
        `
    <img class="img" src=${m.img} alt="Imagen porfolio">
                    <div class="text-porfolio">
                        <h3>${m.titulo}</h3>
                        <a class="btn-b" href="${m.link}" target="_blank"">Probar</a>
                    </div>
    `
    iModels.append(div)

})