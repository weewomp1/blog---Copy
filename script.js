

const navButton = document.querySelector('.nav');

const superContainer = document.querySelector('.supercontainer')

const giggaContainer = document.querySelector('.giggacontainer')

const navigation = document.querySelector('.navigation')

const navParts = document.getElementsByClassName('.se');

const createPost = document.querySelector('.createpost');

const contact = document.querySelector('.contact');

navButton.addEventListener('click', openNav);

createPost.addEventListener('click', scrollNavUp)
contact.addEventListener('click', scrollNavDown);

//console.log(navButton)
/*
navParts.array.forEach(element => {
  element.setAttribute('style', 'background-color: white');
});
*/
let screen = 0;
let navHorizontalScroll = 100;
let navVerticalScroll = -40;

window.addEventListener('resize', resize);

function resize(){
  navigation.setAttribute('style', "height: 300vh");
}

function openNav() {
  console.log('ran function')
  switch (screen){
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

function scrollNavUp(){
  navVerticalScroll = -58.275+100;
  navHorizontalScroll = 0;
  navigation.setAttribute('style', `transform: translateX(${navHorizontalScroll}vw)  translateY(${navVerticalScroll}vh)`)
}

function scrollNavDown(){
  navVerticalScroll = -58.275-100.275;
  navHorizontalScroll = 0;
  navigation.setAttribute('style', `transform: translateX(${navHorizontalScroll}vw)  translateY(${navVerticalScroll}vh)`)
}