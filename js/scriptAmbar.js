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
        startTime:98
    },

    {
        text: ". De repente, la oscuridad se disipó y me encontré en un salón majestuoso",
        type:"word",
        startTime:109
    },

    {
        text: ", iluminado por una luz dorada que parecía venir de todas partes",
        type:"word",
        startTime:115
    },

    {
        text: ". Osiris, el dios de los muertos, me observaba con una mirada serena pero penetrante",
        type:"word",
        startTime:120
    },

    {
        text: ". A su lado, otros dioses me miraban con curiosidad, sus ojos brillando con luz divina",
        type:"word",
        startTime:126
    },

    {
        text: ". Sentí un nudo en el estómago",
        type:"word",
        startTime:134
    },

    {
        text: ". Anubis, con su cabeza de chacal, se acercó y extrajo mi corazón",
        type:"word",
        startTime:137
    },
    
    {
        text: ". Lo colocó en una balanza de oro y, en el otro platillo, una pluma blanca como la nieve, la pluma de Maat, la diosa de la verdad.",
        type:"word",
        startTime:144
    },

    {
        text: ". Mi corazón latía con fuerza, como si quisiera escapar. Sentí un torbellino de recuerdos, mis alegrías, mis penas, mis errores.",
        type:"word",
        startTime:155
    },

    {
        text: " ¿Pesaría mi corazón más que la pluma? ¿Había llevado una vida digna?",
        type:"word",
        startTime:167
    },

    {
        text: "La balanza se equilibró lentamente, y el silencio se volvió eterno. Los dioses me observaban con atención, esperando el veredicto",
        type:"word",
        startTime:175
    },

    {
        text: ". Sentí un sudor frío recorrer mi frente. Finalmente, la balanza se detuvo",
        type:"word",
        startTime:190
    },

    {
        text: ". Mi corazón estaba en equilibrio con la pluma de Maat. Un suspiro de alivio escapó de mis labios",
        type:"word",
        startTime:199
    },

    {
        text: ". Osiris sonrió y me declaró 'justo de voz'. Una luz brillante me envolvió, y me sentí ligero, libre de todo peso",
        type:"word",
        startTime:209
    },

    {
        text: ". Los dioses me guiaron a través de un exuberante jardín, lleno de flores y frutos. El Aaru, el jardín de los Juncos, me esperaba",
        type:"word",
        startTime:226
    },

    {
        text: ". Me sentí en paz, sabiendo que había llevado una vida digna. Y en ese momento, supe que mi alma había encontrado su verdadero hogar, un lugar donde podía ser libre y feliz, un lugar donde reinaba la paz",
        type:"word",
        startTime:242
    },

    {
        text: ". Pero entonces, ocurrió algo inesperado. Un hombre de dos metros se acercó a mí y dijo: 'No deberías estar aquí,' dijo, 'Todavía no es tu momento.' ",
        type:"word",
        startTime:258
    },

    {
        text: " Luego puso sus manos sobre mis ojos, todo se volvió negro, y cuando pude ver de nuevo, estaba acostado, con el torso envuelto en lino",
        type:"word",
        startTime:270
    },

    {
        text: ". En ese momento, me di cuenta de que había sobrevivido, y la verdad es que no me sentí aliviado ",
        type:"word",
        startTime:284
    }
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