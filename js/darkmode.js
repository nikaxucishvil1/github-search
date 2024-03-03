export function darkmode() {
    const buttonDiv = document.querySelector("#onclickDiv");
  
    buttonDiv.addEventListener("click", () => {
      const search = document.querySelector("#input");
      search.classList.toggle("search");
      const infoSpans = document.querySelectorAll("#gottenInfoFirstChild")
      infoSpans.forEach(span => {
        span.classList.toggle("spanfirst")
      })
      const body = document.body;
      body.classList.toggle("body");
      const logo = document.querySelector("#logoH1");
      logo.classList.toggle("logo");
      const lightBtn = document.querySelector("#darkmodeBtn");
      lightBtn.classList.toggle("darkmodeBtn");
      const input = document.querySelector("#input");
      input.classList.toggle("input");
      const searchDiv = document.querySelector("#searchDiv");
      searchDiv.classList.toggle("searchDiv");
      const dataContentDiv = document.getElementById("DataContentDiv");
      dataContentDiv.classList.toggle("dataContentDiv");
      const headerh1 = document.querySelector("#h1");
      headerh1.classList.toggle("headerH1");
      const headerp = document.querySelector("#p");
      headerp.classList.toggle("headerP");
      const infoP = document.querySelector("#infoP");
      infoP.classList.toggle("infoP");
      const infoSocialMediaDiv = document.querySelector("#infoSocialMediaDiv");
      infoSocialMediaDiv.classList.toggle("infoSocialMediaDiv");
      const spanfirst = document.querySelectorAll("#firstSpan");
      spanfirst.forEach((sum) => {
        sum.classList.toggle("spanfirst");
      });
      const spanLast = document.querySelectorAll("#secodSpan");
      spanLast.forEach((span) => {
        span.classList.toggle("spanLast");
      });
      const additionalInfoDivSpan = document.querySelectorAll("#a");
      additionalInfoDivSpan.forEach((span) => {
        span.classList.toggle("additionalInfoDivSpan");
      });
      const i = document.querySelectorAll("#i");
      i.forEach((is) => {
        is.classList.toggle("additionalInfoDivI");
      });
    });
  }