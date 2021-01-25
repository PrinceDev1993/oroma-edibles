const MENU_LIST = document.getElementById("menu");
const TOGGLER_BTN = document.getElementById("toggler");

TOGGLER_BTN.addEventListener("click", () => {
    if (MENU_LIST.classList.contains("hidden")) {
        MENU_LIST.classList.remove("hidden")
    } else {
        MENU_LIST.classList.add("hidden")
    }
})

