const player = document.querySelector(".player");
const texteContainer = document.querySelector(".texteContainer");

const data = [
    {
        text:"Cada fin de semana,",
        type:"word",
        startTime:0
    },
    {
        text:" Caperucita Roja visitaba a su abuela para tomar té y comer sus galletas veganas.",
        type:"word",
        startTime:2
    },
    {
        text:" Siempre caminaba por el bosque pero nunca tenía miedo.",
        type:"word",
        startTime:11
    },
    {
        text:" Un día escuchó ruidos entre los arbustos y vio un lobo hambriento pero tranquilo.",
        type:"word",
        startTime:16
    },
    {
        text:" Cuando llegó,",
        type:"word",
        startTime:22
    },
    {
        text:" noto que nuevamente faltaban las galletas en la ventana.",
        type:"word",
        startTime:23
    },
    {
        text:" Sospechando, se quedó a pasar la noche para ver quién se los llevaba.",
        type:"word",
        startTime:27
    },
    {
        text:" Esa noche se escondió y vio al lobo robando las galletas.",
        type:"word",
        startTime:32
    },
    {
        text:" Ella saltó y lo golpeó con una escoba, pero el lobo, sorprendido, ",
        type:"word",
        startTime:37
    },
    {
        text:"le explicó que era vegetariano y que le encantaban las galletas.",
        type:"word",
        startTime:42
    },
    {
        text:" Sintiéndose mal, ",
        type:"word",
        startTime:46
    },
    {
        text:"Caperucita Roja y su abuela lo invitaron a tomar el té.",
        type:"word",
        startTime:48
    },
    {
        text:" Llegó el cazador, pero después de enterarse de la verdad, ",
        type:"word",
        startTime:52
    },
    {
        text:"se unió a ellos y todos disfrutaron juntos de las galletas.",
        type:"word",
        startTime:55
    },
]

const syncData = data.map((lines)=>{
    return {text: lines.text, time: lines.startTime}
})

console.log(syncData)

syncData.forEach((item)=>{
    const spanTag = document.createElement("span")
    spanTag.innerText = item.text
    texteContainer.appendChild(spanTag)
})

player.addEventListener("timeupdate", () => {
    const currentTime = player.currentTime
    syncData.forEach((item, index)=>{
        const spanTag = texteContainer.children[index]
        if(item.time <= currentTime){
            spanTag.classList.add('active')
        }
    })
})