const player = document.querySelector(".player");
const texteContainer = document.querySelector(".texteContainer");

const data = [
  
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