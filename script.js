const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => loadButtons(data.categories));
};

const loadButtons = (categories) => {
  const container = document.getElementById("category-container");

  for (cat of categories) {
    const btnContainer = document.createElement("div");
    btnContainer.innerHTML = `
        <button class="btn hover:bg-red-500 hover:text-[#FFFFFF]">${cat.category}</button>
        `;
    container.appendChild(btnContainer);
  }
};

loadCategories();

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => showVideos(data.videos));
};

const showVideos = (cards) => {
  const videoContainer = document.getElementById("main");
  for (card of cards) {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
  <figure class="w-full h-48">
  <img
    class="w-full h-full object-cover"
    src="${card.thumbnail}"
    alt="Thumbnail"
  />
</figure>

  <div class="card-body flex-row items-center gap-4 pb-0">
    <img class="w-10 h-10 rounded-full" src="${
      card.authors[0].profile_picture
    }">
    <h2 class="card-title text-lg">${card.title}</h2>
    </div>
<div class="text-center w-auto text-sm flex items-center gap-1">
  <h1 class="ml-20">${card.authors[0].profile_name}</h1>
  ${
    card.authors[0].verified
      ? '<img class="w-4 h-4" src="verified-icon.png" alt="Verified">'
      : ""
  }
</div>
<div class="ml-20 pb-3">
${card.others.views} views
</div>
  </div>

        `;
    videoContainer.appendChild(videoCard);
  }
};

loadVideos();
