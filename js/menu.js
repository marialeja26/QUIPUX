var iconClose = '<a class="fas fa-bars" onclick="openCloseNav()"></a>';
window.onload()

function openNav() {
    document.getElementById("nav-menu").style.width = "9em";
    document.getElementById("option-menu-empresa").style.visibility = "visible";
    document.getElementById("option-menu-articulo").style.visibility = "visible";
    let openIcon = document.getElementById("closeIconNav");
    openIcon.setAttribute('onclick', 'closeNav()');
    openIcon.style.color = "#fff";

}

function closeNav() {
    document.getElementById("nav-menu").style.width = "0";
    document.getElementById("option-menu-empresa").style.visibility = "hidden";
    document.getElementById("option-menu-articulo").style.visibility = "hidden";
    let closeIcon = document.getElementById("closeIconNav");
    closeIcon.setAttribute('onclick', 'openNav()');
    closeIcon.style.color = "#000";
}
