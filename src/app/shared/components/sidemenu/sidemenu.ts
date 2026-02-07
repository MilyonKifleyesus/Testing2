import { fromEvent } from 'rxjs';

export function switcherArrowFn() {
  const slideLeft: any = document.querySelector('.slide-left');
  const slideRight: any = document.querySelector('.slide-right');

  fromEvent(slideLeft, 'click').subscribe(() => {
    slideClick();
  });
  fromEvent(slideRight, 'click').subscribe(() => {
    slideClick();
  });

  // used to remove is-expanded class and remove class on clicking arrow buttons
  function slideClick() {
    const slide = document.querySelectorAll('.main-menu>li'); // change;
    const slideMenu = document.querySelectorAll<HTMLElement>('.slide-menu'); // change
    slide.forEach((element, index) => {
      if (element.classList.contains('is-expanded') == true) {
        element.classList.remove('is-expanded');
      }
    });
    slideMenu.forEach((element, index) => {
      if (element.classList.contains('open') == true) {
        element.classList.remove('open');
        element.style.display = 'none';
      }
    });
  }

  checkHoriMenu();

  fromEvent(slideLeft, 'click').subscribe(() => {
    
    const menuNav: any = document.querySelector('.main-menu');
    const mainContainer1: any = document.querySelector('.main-sidebar');
    const htmlEle: any = document.querySelector('html');
    const marginLeftValue: any = Math.ceil(
      Number(window.getComputedStyle(menuNav).marginLeft.split('px')[0])
    );
    const marginRightValue = Math.ceil(
      Number(window.getComputedStyle(menuNav).marginRight.split('px')[0])
    );
    const mainContainer1Width = mainContainer1.offsetWidth;
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (!(htmlEle.getAttribute('dir') === 'rtl')) {
        if (
          marginLeftValue < 0 &&
          !(Math.abs(marginLeftValue) < mainContainer1Width)
        ) {
          menuNav.style.marginRight = 0;
          menuNav.style.marginLeft =
            Number(menuNav.style.marginLeft.split('px')[0]) +
            Math.abs(mainContainer1Width) +
            'px';
          slideRight.classList.remove('hidden');
        } else if (marginLeftValue >= 0) {
          menuNav.style.marginLeft = '0px';
          slideLeft.classList.add('hidden');
          slideRight.classList.remove('hidden');
        } else {
          menuNav.style.marginLeft = '0px';
          slideLeft.classList.add('hidden');
          slideRight.classList.remove('hidden');
        }
      } else {
        if (
          marginRightValue < 0 &&
          !(Math.abs(marginRightValue) < mainContainer1Width)
        ) {
          menuNav.style.marginLeft = 0;
          menuNav.style.marginRight =
            Number(menuNav.style.marginRight.split('px')[0]) +
            Math.abs(mainContainer1Width) +
            'px';
          slideRight.classList.remove('hidden');
        } else if (marginRightValue >= 0) {
          menuNav.style.marginRight = '0px';
          slideLeft.classList.add('hidden');
          slideRight.classList.remove('hidden');
        } else {
          menuNav.style.marginRight = '0px';
          slideLeft.classList.add('hidden');
          slideRight.classList.remove('hidden');
        }
      }
    } else {
      menuNav.style.marginLeft = '0px';
      menuNav.style.marginRight = '0px';
    }
    const element: any = document.querySelector('.main-menu > .slide.open');
    const element1: any = document.querySelector(
      '.main-menu > .slide.open >ul'
    );
    element && element.classList.remove('active');
    if (element1) element1.style.display = 'none';

    // switcherArrowFn();
    return;
  
  });

  fromEvent(slideRight, 'click').subscribe(() => {

    const menuNav: any = document.querySelector('.main-menu');
    const mainContainer1: any = document.querySelector('.main-sidebar');
    const htmlEle: any = document.querySelector('html');
    const marginLeftValue = Math.ceil(
      Number(window.getComputedStyle(menuNav).marginLeft.split('px')[0])
    );
    const marginRightValue = Math.ceil(
      Number(window.getComputedStyle(menuNav).marginRight.split('px')[0])
    );
    const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
    let mainContainer1Width: any = mainContainer1.offsetWidth;

    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      if (!(htmlEle.getAttribute('dir') === 'rtl')) {
        if (Math.abs(check) > Math.abs(marginLeftValue)) {
          menuNav.style.marginRight = 0;
          if (
            !(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)
          ) {
            mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
            slideRight.classList.add('hidden');
          }
          menuNav.style.marginLeft =
            Number(menuNav.style.marginLeft.split('px')[0]) -
            Math.abs(mainContainer1Width) +
            'px';
          slideLeft.classList.remove('hidden');
        }
      } else {
        if (Math.abs(check) > Math.abs(marginRightValue)) {
          menuNav.style.marginLeft = 0;
          if (
            !(
              Math.abs(check) >
              Math.abs(marginRightValue) + mainContainer1Width
            )
          ) {
            mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
            slideRight.classList.add('hidden');
          }
          menuNav.style.marginRight =
            Number(menuNav.style.marginRight.split('px')[0]) -
            Math.abs(mainContainer1Width) +
            'px';
          slideLeft.classList.remove('hidden');
        }
      }
    }
    const element: any = document.querySelector('.main-menu > .slide.open');
    const element1: any = document.querySelector(
      '.main-menu > .slide.open >ul'
    );
    if (element) element.classList.remove('active');
    if (element1) element1.style.display = 'none';

    // switcherArrowFn();
    return;
  });
}
export function checkHoriMenu() {
  const menuWidth: any = document.querySelector<HTMLElement>('.main-menu');
  const menuItems: any = document.querySelector<HTMLElement>('.main-menu-container');
  const mainSidemenuWidth: any =
    document.querySelector<HTMLElement>('.main-sidebar');

  const menuContainerWidth =
    menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
  const marginLeftValue = Math.ceil(
    Number(window.getComputedStyle(menuItems).marginLeft.split('px')[0])
  );
  const marginRightValue = Math.ceil(
    Number(window.getComputedStyle(menuItems).marginRight.split('px')[0])
  );
  const check =
    menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

  if (document.querySelector('body')?.classList.contains('ltr')) {
    menuItems.style.marginRight = 0;
  } else {
    menuItems.style.marginLeft = 0;
  }

  if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
    document.querySelector('.slide-left')?.classList.add('hidden');
    document.querySelector('.slide-right')?.classList.add('hidden');
    document.querySelector('.slide-leftRTL')?.classList.add('hidden');
    document.querySelector('.slide-rightRTL')?.classList.add('hidden');
  } else if (marginLeftValue != 0 || marginRightValue != 0) {
    document.querySelector('.slide-right')?.classList.remove('hidden');
    document.querySelector('.slide-rightRTL')?.classList.remove('hidden');
  } else if (marginLeftValue != -check || marginRightValue != -check) {
    document.querySelector('.slide-left')?.classList.remove('hidden');
    document.querySelector('.slide-leftRTL')?.classList.remove('hidden');
  }
  if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
    document.querySelector('.slide-left')?.classList.remove('hidden');
    document.querySelector('.slide-right')?.classList.remove('hidden');
    document.querySelector('.slide-leftRTL')?.classList.remove('hidden');
    document.querySelector('.slide-rightRTL')?.classList.remove('hidden');
  }
  if (marginLeftValue == 0 || marginRightValue == 0) {
    document.querySelector('.slide-left')?.classList.add('hidden');
    document.querySelector('.slide-leftRTL')?.classList.add('hidden');
  }
  if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector('.slide-left')?.classList.remove('hidden');
    document.querySelector('.slide-leftRTL')?.classList.remove('hidden');
  }
}
