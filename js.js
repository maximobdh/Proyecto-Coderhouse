const sidebar = document.getElementById("sidebar")
const botonSidebarAbrir = document.getElementById("boton-open")
const botonSidebarCerrar = document.getElementById("boton-close")

function openSidebar(){
    sidebar.style.display = "block"
}

botonSidebarAbrir.addEventListener("click", openSidebar)

function closeSidebar(){
    sidebar.style.display = "none"
}

botonSidebarCerrar.addEventListener("click", closeSidebar)