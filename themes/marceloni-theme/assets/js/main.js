document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        if(localStorage.getItem("theme")!="dark"){
            document.body.classList.remove("dark")
            document.getElementById("theme-switch").getElementsByTagName("input")[0].checked = true
        }else {
            document.getElementById("theme-switch").getElementsByTagName("input")[0].checked = false
        }
        
        addEventListener("change", changeTheme)
    },1)
})
function changeTheme() {
    if(document.getElementById("theme-switch").getElementsByTagName("input")[0].checked){
        document.body.classList.add("dark")
        localStorage.setItem("theme", "light")
    }else {
        document.body.classList.remove("dark")
        localStorage.setItem("theme", "dark")
    }
    document.body.classList.toggle("dark")
}