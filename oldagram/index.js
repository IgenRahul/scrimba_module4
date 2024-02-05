const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postsEl = document.querySelector(".posts");

function renderPosts() {
  postsEl.innerHTML = "";
  posts.forEach((post) => {
    const userInfoDiv = `
        <section class="post">
            <div class="user-info">
                <img class="round-img" src="${post.avatar}" />
                <div class="user-details">
                    <h2>${post.name}</h2>
                    <p>${post.location}</p>
                </div>
            </div>
            <div>
                <img class="post-image" src="${post.post}" alt="" />
            </div>
            <div class="users-engagement">
                <div class="post-icons">
                    <img class="icon" src="images/icon-heart.png" alt="" />
                    <img class="icon" src="images/icon-comment.png" alt="" />
                    <img class="icon" src="images/icon-dm.png" alt="" />
                </div>
                <p class="likes">${post.likes} likes</p>
                <p><span>vincey1853</span> ${post.comment}</p>
            </div>
        </section>`;
    postsEl.innerHTML += userInfoDiv;
  });
}
renderPosts();
