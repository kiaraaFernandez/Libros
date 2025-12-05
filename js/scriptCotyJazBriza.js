const player = document.querySelector(".player");
const texteContainer = document.querySelector(".texteContainer");

const data = [
    {
        text:"Había una vez, en una tierra lejana, una familia feliz que vivía en un bosque. Todas las tardes, Hansel y Gretel salían a jugar, pero un día decidieron explorar el vasto y oscuro bosque.",
        type:"word",
        startTime:1
    },
    {
        text:" Hansel, el hermnao mayor,empezó a usar migas de pan para marcar el camino de regreso a casa, mientras Gretel, la hermana menor, jugaba cerca.",
        type:"word",
        startTime:15
    },
    {
        text:" Tras horas de caminata, empezaron a tener hambre. Por desgracia, Hansel ya había agotado todas las migas de pan.",
        type:"word",
        startTime:27
    },
    {
        text:"Fue entonces cuando sintieron un delicioso aroma a caramelo que los atrajo hacia lo más profundo del bosque,",
        type:"word",
        startTime:35
    },
    {
        text:" llevándolos a una apartada cabaña de jengibre completamente rodeada de dulces de colores brillantes.",
        type:"word",
        startTime:44
    },
    {
        text:" Al ver esto, corrieron a la casa de jengibre y comenzaron a comer desesperadamente. De repente, apareció una vieja bruja muy enfadada con un vestido negro y polvoriento.",
        type:"word",
        startTime:49
    },
    {
        text:" Estaba furiosa porque se estaban comiendo su casa y les gritaba. Los hermanos, aterrorizados, se disculparon con la bruja, pero ella se negó a perdonarlos.",
        type:"word",
        startTime:61
    },
    {
        text:" Roja de furia, exigió una compensación. Como Hansel y Gretel no tenían dinero, decidió que trabajarían para ella, haciendo dulces durante los próximos días.",
        type:"word",
        startTime:77
    },
    {
        text:" Trabajaba para la Vieja Bruja, pero ella los maltrataba. Cansados de esto, idearon un plan para escapar.",
        type:"word",
        startTime:98
    },
    {
        text:" Todas las mañanas, la bruja endendió un gran caldero con agua hirviendo y azúcar para hacer sus dulces. Un día, Gretel vio la oportunidad de liberarde a si misma y a su Hermano de la crueldad de la Bruja",
        type:"word",
        startTime:104
    },
    {
        text:". Le dijo a la bruja que un insecto había caído en el caldero. Cuando la bruja se inclinó para sacarlo,",
        type:"word",
        startTime:117
    },
    {
        text:" Gretel la empujó al caldero con todas sus fuerzas haciedo que se derritiese y se caramelizase en su propio caramelo.",
        type:"word",
        startTime:122
    },
    {
        text:" Así fue como se deshaceron de la Bruja y se apoyaron de su negocio.",
        type:"word",
        startTime:130
    },
    {
        text:" Hansel y Gretel crecieron y ganaron mucho dinero, mientras la bruja permanecio caramelizada como una estatua en algún lugar profundo del bosque.",
        type:"word",
        startTime:134
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