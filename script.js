async function  cargarDatos() {
    const respueta = await fetch("data.json")
    const datos = await respueta.json()
    const ol = document.getElementById("ol")
    datos.forEach(usuario =>{
        // Creamos un li
        const li = document.createElement("li")
        li.classList.add("lii")
        li.style.background =  usuario.bg
        const div = document.createElement("div")
        div.classList.add("img-p-tw")
        const img = document.createElement("img")
        const p1 = document.createElement("p")
        p1.style.color = `${usuario.color}`
        p1.classList.add("textt")
        const p2 = document.createElement("p")
        p2.classList.add("textt2")
        const espan = document.createElement("span")
        espan.classList.add("espan")
        img.src = usuario.icon
        p1.textContent = usuario.category
        espan.textContent = `${usuario.score}`
        p2.append(espan, " / 100")
        div.append(img,p1)
        li.append(div,p2)
        ol.appendChild(li)
    })  
}
cargarDatos()