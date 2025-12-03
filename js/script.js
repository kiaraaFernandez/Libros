const player = document.querySelector(".player");
const texteContainer = document.querySelector(".texteContainer");

const data = [
    {
        text:"Mi vida había sido un tapiz de decisiones difíciles y momentos de incertidumbre",
        type:"word",
        startTime:16
    },
    {
        text:". Pero siempre había intentado seguir mi corazón y ser justa con los demás",
        type:"word",
        startTime:22
    },
    {
        text: ". Ayudaba a los necesitados y atendía a los heridos como sacerdotisa",
        type: "word",
        startTime:30
    },
    {
        text: ". Un día, mientras caminaba por el pueblo, un ladrón me atacó",
        type: "word",
        startTime: 41
    },
    {
        text: ". Cuando vio a los guardias, me apuñaló y caí al suelo,",
        type: "word",
        startTime: 48         
    },
    {
        text: " observando cómo huía con todas mis pertenencias",
        type: "word",
        startTime: 58
    },
    {
        text: ", mientras todo se desvanecía",
        type: "word",
        startTime:66
    },
    {
        text: ". Pero entonces, ocurrió algo extraño",
        type:"word",
        startTime:73
    },
    {
        text: " .Una profunda calma se apoderó de mí",
        type:"word",
        startTime:77
    },
    {
        text: ", y sentí que mi alma se liberaba de las cadenas de la vida",
        type:"word",
        startTime:80
    },
    {
        text: ". Me sentí ligero, libre, y podía ver el mundo desde una nueva perspectiva",
        type:"word",
        startTime:88
    },
    {
        text: ". Supe que había muerto, y ahora tenía que enfrentar el juicio de los dioses",
        type:"word",
        startTime:96
    },

    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },{
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
    },
    {
        text: "",
        type:"word",
        startTime:0
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