const darkMode = document.querySelector('[data-js="darkMaode"]');
const header = document.querySelector('[data-js="header"]');

darkMode.addEventListener("click", () => {
  if (darkMode.checked) {
    console.log("switch to dark mode");
    document.body.classList.add("dark-mode");
    header.classList.add("header-darkmode");
  } else {
    console.log("light mode");
    document.body.classList.remove("dark-mode");
    header.classList.remove("header-darkmode");
  }
});
