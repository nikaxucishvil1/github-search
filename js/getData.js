export function fetchData() {
    const searchInput = document.getElementById("input");
  
    const notfound = document.querySelector("#noSpan");
  
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
  
          const userimg = document.querySelector("#userimg");
          userimg.src = `${item.avatar_url}
        `;
          const h1 = document.querySelector("#h1");
          const spanlink = document.querySelector("#linkedspan");
          const p = document.querySelector("#p");
          const infoP = document.querySelector("#infoP");
          const fisrtSpan = document.querySelector(".firstSpan");
          const secondSpan = document.querySelector(".secondSpan");
          const thirdSpan = document.querySelector(".thirdSpan");
          const location = document.querySelector(".location");
          const blog = document.querySelector(".blog");
          const twitterUserName = document.querySelector(".twitterUserName");
          const company = document.querySelector(".company");
  
          h1.innerHTML = `${item.name}`;
          spanlink.innerHTML = `@${item.html_url.slice(19)}`;
          p.innerHTML = ` joined at ${approvedDate}`;
          infoP.innerHTML = ` ${item.bio}`;
          fisrtSpan.innerHTML = `${item.public_repos}`;
          secondSpan.innerHTML = `${item.followers}`;
          thirdSpan.innerHTML = `${item.following}`;
          location.innerHTML = `<i id="i" class="fa-solid fa-location-dot"></i>${item.location}`;
          blog.innerHTML = `<i id="i" class="fa-solid fa-link"></i>${item.blog}`;
          twitterUserName.innerHTML = `<i id="i" class="fa-brands fa-twitter"></i>${item.twitter_username}`;
          company.innerHTML = `<i id="i" class="fa-solid fa-building"></i>${item.company}`;
        }
      });
  }