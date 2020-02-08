/* DOM : Document Object Model */

const title = document.querySelector('#title');
//title.innerHTML = '집에 가고 싶어요';
const CLICKED_CLASS = 'clicked';

function handleClick() {
  /*
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if(hasClass){
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }*/
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener('click', handleClick);
}

init();
