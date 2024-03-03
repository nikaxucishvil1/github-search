import { fetchData } from "./getData.js";

export function searchFoo() {
  
    const searchBtn = document.querySelector("#searchBtn");
    searchBtn.addEventListener("click", fetchData);
  }

  