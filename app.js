const searchInput = document.getElementById("input");
const contentDiv = document.getElementById("content3");
const searchBtn = document.querySelector("#searchBtn");
const a = document.querySelectorAll("a");
const notfound = document.querySelector("#noSpan");

a.forEach((item) => {
  item.href = "javascript:void(0)";
  item.style.pointerEvents = "none";
});

searchBtn.addEventListener("click", () => {
  function fetchData() {
    fetch(`https://api.github.com/users/${searchInput.value}`)
      .then((item) => item.json())
      .then((item) => {
        if (item.message) {
          notfound.style.display = "block";
        } else {
          
          notfound.style.display = "none";
          if (item.location === null || item.location === "") {
            item.location = "Not Available";
          }
          if (item.blog === null || item.blog === "") {
            item.blog = "Not Available";
          }
          if (item.twitter_username === null || item.twitter_username === "") {
            item.twitter_username = "Not Available";
          }
          if (item.company === null || item.company === "") {
            item.company = "Not Available";
          }

          const date = new Date(item.created_at)
            .toISOString()
            .replace("T", " ")
            .replace("Z", "");
          const approvedDate = date.slice(0, 10);
          contentDiv.innerHTML = `
            <div id="DataContentDiv">
        <header>
          <div id="headerImg">
            <img
              id="userimg"
              src="${item.avatar_url}"
              alt=""
            />
          </div>
          <div id="headerTextDiv">
            <h1 id="h1">${item.name}</h1>
            <span href="">@${item.html_url.slice(19)}</span>
            <p id="p"> joined at ${approvedDate}</p>
          </div>      
        </header>
        <div id="infoDiv">
          <p id="infoP">
            ${item.bio}
          </p>
        </div>
        <div id="infoSocialMediaDiv">
            <div id="infos">
                <div id="gottenInfo">
                    <span id="firstSpan">Repos</span>
                    <span id="secodSpan">${item.public_repos}</span>
                </div>
                <div id="gottenInfo">
                    <span  id="firstSpan">Followers</span>
                    <span id="secodSpan">${item.followers}</span>
                </div>
                <div id="gottenInfo">
                    <span id="firstSpan">Following</span>
                    <span id="secodSpan">${item.following}</span>
                </div>
            </div>
        </div>
        <div id="additionalInfoDiv">
            <span id="a" href=""><i id="i" class="fa-solid fa-location-dot"></i>${
              item.location
            }</span>
            <span id="a" href=""><i id="i" class="fa-solid fa-link"></i>${
              item.blog
            }</span>
            <span id="a" href=""><i id="i" class="fa-brands fa-twitter"></i>${
              item.twitter_username
            }</span>
            <span id="a" href=""><i id="i" class="fa-solid fa-building"></i>${
              item.company
            }</span>
        </div>
            `;
            
        }
      });
      
  }
  fetchData();
});

//sad chavsva? function darkmode() {
//   const darkmodeBtn = document.querySelector("#darkmodeBtn");
//   const moon = document.querySelector("#img2");
//   const sun = document.querySelector("#img")


//   darkmodeBtn.addEventListener("click", () => {
//     const body = document.body;
//     body.classList.toggle("body");
//     const logo = document.querySelector("#logoH1");
//     logo.classList.toggle("logo");
//     const lightBtn = document.querySelector("#darkmodeBtn");
//     lightBtn.classList.toggle("darkmodeBtn");
//     const input = document.querySelector("#input");
//     input.classList.toggle("input");
//     const searchDiv = document.querySelector("#searchDiv");
//     searchDiv.classList.toggle("searchDiv");
//     const dataContentDiv = document.getElementById("DataContentDiv");
//     dataContentDiv.classList.toggle("dataContentDiv");
//     const headerh1 = document.querySelector("#h1")
//     headerh1.classList.toggle("headerH1")
//     const headerp = document.querySelector("#p")
//     headerp.classList.toggle("headerP")
//     const infoP = document.querySelector("#infoP")
//     infoP.classList.toggle("infoP")
//     const infoSocialMediaDiv = document.querySelector("#infoSocialMediaDiv")
//     infoSocialMediaDiv.classList.toggle("infoSocialMediaDiv")
//     const spanfirst = document.querySelectorAll("#firstSpan")
//     spanfirst.forEach(sum => {
//       sum.classList.toggle("spanfirst")
//     })
//     const spanLast = document.querySelectorAll("#secodSpan")
//     spanLast.forEach(span => {
//       span.classList.toggle("spanLast")
//     })
//     const additionalInfoDivSpan = document.querySelectorAll("#a")
//     additionalInfoDivSpan.forEach(span => {
//       span.classList.toggle("additionalInfoDivSpan")
//     })
//     const i = document.querySelectorAll("#i")
//     i.forEach(is => {
//       is.classList.toggle('additionalInfoDivI')
//     })
    
      
//   });
// }

// darkmode();
