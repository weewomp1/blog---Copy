import database from "./database.js";

const {posts} = database;

const displayPost = ({title, author, time, thumbsUp, thumbsDown, content}) => {
  const post = document.createElement('div');
  post.innerHTML = `<div class="post post2">
    <h2>${title}</h2>
    <h3>${author}, date and time</h3>
    <p>
      ${content}
    </p>
    <div class="statuses">
      <div class="like">👍 ${thumbsUp}</div>
      <div class="dislike">👎 ${thumbsDown}</div>
    </div>
  </div>`;

  document.getElementById('posts').appendChild(post);
};

window.onload = () => {

  console.log('Posts', posts);

  for(let i = 0; i < posts.length; i++){
    displayPost(posts[i]);
  }
  
};

const navButton = document.querySelector('.nav');
const navigation = document.querySelector('.navigation')
const createPost = document.querySelector('.createpost');
const contact = document.querySelector('.contact');

navButton.addEventListener('click', openNav);
createPost.addEventListener('click', scrollNavUp)
contact.addEventListener('click', scrollNavDown);

let screen = 0;
let navHorizontalScroll = 100;
let navVerticalScroll = -40;

window.addEventListener('resize', resize);

function resize() {
  navigation.setAttribute('style', "height: 300vh");
}

function openNav() {
  console.log('ran function')
  switch (screen) {
    case 0:
      navHorizontalScroll = 0;
      navVerticalScroll = -58.275;
      navigation.setAttribute('style', `transform: translatex(${navHorizontalScroll}vw)  translateY(${navVerticalScroll}vh);`)
      document.body.setAttribute('style', 'overflow-y: hidden');
      navButton.setAttribute('style', 'transform: rotate(90deg)');
      screen = 1;
      break;

    case 1:
      navHorizontalScroll = 100;
      navVerticalScroll = -58.275;
      navigation.setAttribute('style', `transform: translateX(${navHorizontalScroll}vw)  translateY(-${navVerticalScroll}vh)`)
      document.body.setAttribute('style', 'overflow-y: visible');
      navButton.setAttribute('style', 'transform: rotate(0deg)');
      screen = 0;
      break;
  }
}

function scrollNavUp() {
  navVerticalScroll = -58.275 + 100;
  navHorizontalScroll = 0;
  navigation.setAttribute('style', `transform: translateX(${navHorizontalScroll}vw)  translateY(${navVerticalScroll}vh)`)
}

function scrollNavDown() {
  navVerticalScroll = -58.275 - 100.275;
  navHorizontalScroll = 0;
  navigation.setAttribute('style', `transform: translateX(${navHorizontalScroll}vw)  translateY(${navVerticalScroll}vh)`)
}

export default {
  cheese: 'danish'
};