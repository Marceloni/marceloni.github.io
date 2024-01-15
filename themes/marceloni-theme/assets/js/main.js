document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("theme-switch").getElementsByTagName("input")[0].checked = false
    addEventListener("change", changeTheme)
})
function changeTheme() {
    document.body.classList.toggle("dark")
}