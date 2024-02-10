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
        } else{
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
            <h1>${item.name}</h1>
            <span href="">@${item.html_url.slice(19)}</span>
            <p> joined at ${approvedDate}</p>
          </div>      
        </header>
        <div id="infoDiv">
          <p>
            ${item.bio}
          </p>
        </div>
        <div id="infoSocialMediaDiv">
            <div id="infos">
                <div id="gottenInfo">
                    <span>Repos</span>
                    <span>${item.public_repos}</span>
                </div>
                <div id="gottenInfo">
                    <span>Followers</span>
                    <span>${item.followers}</span>
                </div>
                <div id="gottenInfo">
                    <span>Following</span>
                    <span>${item.following}</span>
                </div>
            </div>
        </div>
        <div id="additionalInfoDiv">
            <span id="a" href=""><i class="fa-solid fa-location-dot"></i>${item.location}</span>
            <span id="a" href=""><i class="fa-solid fa-link"></i>${item.blog}</span>
            <span id="a" href=""><i class="fa-brands fa-twitter"></i>${item.twitter_username}</span>
            <span id="a" href=""><i class="fa-solid fa-building"></i>${item.company}</span>
        </div>
            `;
        }
      });
  }
  fetchData();
});
