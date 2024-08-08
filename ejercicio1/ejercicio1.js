const JDT = document.createElement("h1")
const header = document.createElement("header")
const body = document.querySelector("body")
JDT.innerHTML = "Personajes de Juego de Tronos"
body.insertAdjacentElement("beforebegin", header)
header.appendChild(JDT)

const select = document.querySelector("#character-list")

fetch("https://thronesapi.com/api/v2/Characters")
.then((res) => res.json())
.then((res) => res.map((character) => {
     const option = document.createElement("option")
     option.innerHTML = character.fullName
     select.appendChild(option)

     select.addEventListener("change", () => {
        if(character.fullName === select.value) {
        document.body.innerHTML += `
        <h2>${character.fullName}</h2>
        <h3>${character.family}</h3>
        <img src=${character.imageUrl} alt=${character.fullName}/>
        `
}})
}))