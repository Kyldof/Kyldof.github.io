const sidebarToggle = document.getElementById('sidebarToggle');
const mainContent = document.getElementById('mainContent');

sidebarToggle.addEventListener("click", () => {
    mainContent.classList.toggle('shift'); // Décale/Redécale le contenu
    console.log("Sidebar toggled");
});
