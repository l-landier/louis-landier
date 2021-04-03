import { animationScrollTop } from './animationScrollTop';

const navLink = document.getElementsByClassName('nav-link');
const navBarMenuCheck = document.getElementById('navbar-menu-check');

export const smoothScroll = () => {
  const scrollElems = document.getElementsByClassName('smooth-scroll');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < scrollElems.length; i++) {
    const elem = scrollElems[i];

    elem.addEventListener('click', e => {
      e.preventDefault();
      const scrollElemId = e.currentTarget.dataset.scrollTo;
      const scrollEndElem = document.getElementById(scrollElemId);

      animationScrollTop(scrollEndElem);
    });
  }
};

export const currentAge = () => {
  const currentAgeBlock = document.getElementById('current-age');
  let today = new Date();
  let todayYear = today.getFullYear();
  let myAge = todayYear - 1990;

  currentAgeBlock.innerText = myAge;
};

window.addEventListener('load', () => {
  smoothScroll();
  currentAge();

  Array.from(navLink).forEach( navLink => {
    navLink.addEventListener('click', () => {
      setTimeout(function(){
        navBarMenuCheck.checked = false;
      }, 700);
    });
  });
});
