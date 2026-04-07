// PAGE NAVIGATION

function showPage(page){

document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active")

})

document.getElementById(page).classList.add("active")

}


// BREATHING EXERCISE

function startBreathing(){

const text=document.getElementById("breathingText")

const circle=document.getElementById("breathingCircle")

let cycle=0

const breathing=setInterval(()=>{

if(cycle%2===0){

text.innerText="Breathe In"

circle.classList.remove("breatheOut")
circle.classList.add("breatheIn")

}else{

text.innerText="Breathe Out"

circle.classList.remove("breatheIn")
circle.classList.add("breatheOut")

}

cycle++

if(cycle===8){

clearInterval(breathing)

text.innerText="Exercise complete. You should feel calmer."

}

},4000)

}



// BUBBLE GAME

let score=0

let gameInterval

function startGame(){

score=0

document.getElementById("score").innerText=score

clearInterval(gameInterval)

gameInterval=setInterval(createBubble,800)

}

function createBubble(){

const bubble=document.createElement("div")

bubble.className="bubble"

bubble.style.left=Math.random()*300+"px"

bubble.style.top=Math.random()*100+"px"

bubble.onclick=function(){

score++

document.getElementById("score").innerText=score

bubble.remove()

}

document.getElementById("gameArea").appendChild(bubble)

}



// COMMUNITY MESSAGES

function sendMessage(){

let msg=document.getElementById("messageInput").value

if(msg==="") return

let list=JSON.parse(localStorage.getItem("messages"))||[]

list.push(msg)

localStorage.setItem("messages",JSON.stringify(list))

document.getElementById("messageInput").value=""

loadMessages()

}

function loadMessages(){

let list=JSON.parse(localStorage.getItem("messages"))||[]

let container=document.getElementById("messages")

container.innerHTML=""

list.slice(-6).forEach(m=>{

container.innerHTML+=`<p>${m}</p>`

})

}

loadMessages()



// SPOTIFY PLAYLIST

function addSong(){

let url=document.getElementById("songInput").value

if(url==="") return

let songs=JSON.parse(localStorage.getItem("songs"))||[]

songs.push(url)

localStorage.setItem("songs",JSON.stringify(songs))

document.getElementById("songInput").value=""

loadSongs()

}

function loadSongs(){

let songs=JSON.parse(localStorage.getItem("songs"))||[]

let container=document.getElementById("songs")

container.innerHTML=""

songs.forEach(s=>{

let embed=s.replace("open.spotify.com/track/","open.spotify.com/embed/track/")

container.innerHTML+=`<iframe src="${embed}" width="250" height="80"></iframe>`

})

}

loadSongs()