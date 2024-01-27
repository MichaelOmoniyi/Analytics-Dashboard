const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

// The code below opens and closes the sidebar
let logo = document.querySelector('.logo');
let logo_two = document.querySelector('.logo_two');
let sidebar = document.querySelector('.sidebar');
let body = document.querySelector('.body');
let openSidebar = () => 
{
    sidebar.style.width = "15%";
    logo.style.display = "none";
    sidebar.style.transform = "translateX(0px)";
}
let closeSidebar = () =>
{
    sidebar.style.width = "0";
    logo.style.display = "block";
    sidebar.style.transform = "translateX(-15px)";
}

// The code below controls the profile dropdown
let dropdown = document.querySelector(".dropdown");
let profilePic = document.querySelector(".profilePic");

let openCloseProfile = () =>
{
    if (dropdown.style.display === "none")
    {
        dropdown.style.display = "flex";
    }
    else
    {
        dropdown.style.display = "none";
    }
}

// The code below changes the background
let switchContainer = document.querySelector(".theme");
let themeSwitch = document.querySelectorAll(".theme_switch");
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let headerSm = document.querySelector(".header-sm");
let headerLs = document.querySelector(".header-ls");
let navLinks = document.querySelector(".navlinks");
let searchInput = document.getElementById("search");

document.addEventListener("DOMContentLoaded", () => {
    light.classList.add("change");
    // light.style.backgroundColor = "#000";
});

// This code changes the styling for the switches on clicking it and also changes the background
let bgChange = () => {
    themeSwitch.forEach((switchElement) => {
        switchElement.addEventListener("click", () => {
            themeSwitch.forEach((switchElement) => {
                switchElement.classList.remove("change");
            });
            switchElement.classList.add("change");
        });
    });
    light.addEventListener("click", () => {
        body.classList.remove("dark");
        sidebar.classList.remove("dark");
        headerSm.classList.remove("dark");
        headerLs.classList.remove("dark");
        navLinks.classList.remove("dark");
        body.classList.add("light");
        sidebar.classList.add("light");
        headerSm.classList.add("light");
        headerLs.classList.add("light");
        navLinks.classList.add("light");
        switchContainer.style.backgroundColor = "#d8d3d3";
        dropdown.style.backgroundColor = "#faf6f6";
        searchInput.style.color = "#252424";
        searchInput.style.backgroundColor = "#faf6f6";
    })
    dark.addEventListener("click", () => {
        body.classList.remove("light");
        sidebar.classList.remove("light");
        headerSm.classList.remove("light");
        headerLs.classList.remove("light");
        navLinks.classList.remove("light");
        body.classList.add("dark");
        sidebar.classList.add("dark");
        headerSm.classList.add("dark");
        headerLs.classList.add("dark");
        navLinks.classList.add("dark");
        switchContainer.style.backgroundColor = "#726f6f";
        dropdown.style.backgroundColor = "#252424";
        searchInput.style.color = "#faf6f6";
        searchInput.style.backgroundColor = "#252424";
    })
};
bgChange();
