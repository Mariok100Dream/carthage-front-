export const js_data_navbartype2 = `
const searchButton = document.querySelector(".nav_Navbartype2 .desktop-nav_Navbartype2 .link-search_Navbartype2");
const closeButton = document.querySelector(".search-container_Navbartype2 .link-close_Navbartype2");
const desktopNav = document.querySelector(".desktop-nav_Navbartype2");
const searchContainer = document.querySelector(".search-container_Navbartype2");
const overlay_Navbartype2 = document.querySelector(".overlay_Navbartype2");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide_Navbartype2");
    searchContainer.classList.remove("hide_Navbartype2");
    overlay_Navbartype2.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide_Navbartype2");
    searchContainer.classList.add("hide_Navbartype2");
    overlay_Navbartype2.classList.remove("show");
})

overlay_Navbartype2.addEventListener("click", () => {
    desktopNav.classList.remove("hide_Navbartype2");
    searchContainer.classList.add("hide_Navbartype2");
    overlay_Navbartype2.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector(".nav_Navbartype2 .menu-icon_Navbartype2-container_Navbartype2");
const navContainer = document.querySelector(".nav-container_Navbartype2");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container_Navbartype2 .search-bar_Navbartype2");
const nav = document.querySelector(".nav-container_Navbartype2 .nav_Navbartype2");
const searchInput = document.querySelector(".mobile-search-container_Navbartype2 input");
const cancelBtn = document.querySelector(".mobile-search-container_Navbartype2 .cancel-btn_Navbartype2");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})


`