export function changeButtons() {
    const buttonDiv = document.querySelector("#onclickDiv");
    const button = document.querySelector("#darkmodeBtn");
    const img = document.querySelector("#img");
    buttonDiv.addEventListener("click", () => {
      if (button.textContent === "LIGHT") {
        button.innerHTML = "DARK";
        img.src = "/img/moon.svg";
      } else {
        button.innerHTML = "LIGHT";
        img.src = "/img/sun.svg";
      }
    });
  }