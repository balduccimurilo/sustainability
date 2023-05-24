// @ts-nocheck
const bulb = document.querySelector(".js-theme");

const themes = {
  "dark-theme": "light-theme",
  "light-theme": "dark-theme",
};

const imgTheme = document.getElementById("imgTheme");

if (bulb) {
  bulb.addEventListener("click", (event) => {
    event.preventDefault();
    const currentTheme = document.body.dataset.theme;
    document.body.setAttribute(
      "data-theme",
      themes[currentTheme] || "light-theme"
    );

    if (imgTheme) {
      if (imgTheme.src.endsWith("sun.svg")) {
        imgTheme.src = "../assets/moon.svg";
      } else {
        imgTheme.src = "../assets/sun.svg";
      }
    }
  });
}
