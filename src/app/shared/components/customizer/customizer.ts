import { fromEvent } from 'rxjs';
import * as sidebarFn from '../sidemenu/sidemenu';

export function localStorageBackUp() {
  let html = document.querySelector('html')?.style;
  let body = document.querySelector('body');
  if (localStorage.getItem('Spruhalight-primary-color') !== null) {
    body?.classList.add('light-theme');
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-theme');
  }
  if (localStorage.getItem('Spruhadark-primary-color') !== null) {
    body?.classList.add('dark-theme');
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;

    body?.classList.remove('light-theme');
  }
  if (localStorage.getItem('SpruhaLightTheme') !== null) {
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-theme');
  }
  if (localStorage.getItem('SpruhaDarkTheme') !== null) {
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;
    body?.classList.add('dark-theme');
    body?.classList.add('dark-menu');
    body?.classList.add('header-dark');

    body?.classList.remove('light-theme');
  }
  if (localStorage.getItem('SpruhaRtl') !== null) {
    let html = document.querySelector('html');
    let styleId = document.querySelector('#style');
    //add
    body?.classList.add('rtl');
    html?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
    let rtl = document.getElementById('myonoffswitch20') as HTMLInputElement;
    rtl.checked = true;
  }
  if (localStorage.getItem('SpruhaHorizontal') !== null) {
    // inner component elements
    let mainContainer = document.querySelectorAll('.main-container');
    let mainContainer1 = document.querySelector('.main-container-1');
    let mainBody1 = document.querySelector('.main-body-1');
    
    let mainMenu = document.querySelector('.main-menu');
    let mainHeader = document.querySelector('.main-header');
    let sideMenu = document.querySelector('.horizontal .menu-nav');
    
    //add
    body?.classList.add('horizontalmenu');
    mainHeader?.classList.add('hor-header');
    mainContainer1?.classList.add('container');
    mainContainer.forEach((e, i) => {
      e?.classList.add('container');
    });

    mainMenu?.classList.add('main-navbar', 'hor-menu');
    sideMenu?.classList.add('flex-nowrap');
    
    // remove
    body?.classList.remove('horizontalmenu-hover', 'leftmenu', 'main-body', 'main-sidebar-hide', 'main-sidebar-open');
    sideMenu?.classList.remove('flex-wrap');
    mainContainer1?.classList.remove('main-sidebar-header');
    mainMenu?.classList.remove('main-sidebar', 'main-sidebar-sticky', 'side-menu');
    mainBody1?.classList.remove('main-sidebar-body');
    mainHeader?.classList.remove('sticky');

    mainContainer.forEach((e, i) => {
      e?.classList.remove('container-fluid');
    });
    
    sidebarFn.checkHoriMenu();
    
    let horizontal = document.getElementById('myonoffswitch02') as HTMLInputElement;
    horizontal.checked = true;
    setTimeout(()=>{
      let mainContent = document.querySelector('.main-content');
      let menuIcon = document.querySelectorAll('.menu-icon');
      
      
      mainContent?.classList.add('hor-content');
      menuIcon.forEach((e, i) => {
        e?.classList.add('hor-icon');
      });
      
      mainContent?.classList.remove('side-content');
      menuIcon.forEach((e, i) => {
        e?.classList.remove('sidemenu-icon');
      });
    },0)
  }
  if (localStorage.getItem('SpruhaHorizontalHover') !== null) {
     // inner component elements
    let mainContainer = document.querySelectorAll('.main-container');
    let mainContainer1 = document.querySelector('.main-container-1');
    let mainBody1 = document.querySelector('.main-body-1');
    let mainMenu = document.querySelector('.main-menu');
    let mainHeader = document.querySelector('.main-header');
    let sideMenu = document.querySelector('.horizontal .menu-nav');

    //add
    body?.classList.add('horizontalmenu');
    body?.classList.add('horizontalmenu-hover');
    mainHeader?.classList.add('hor-header');
    mainContainer1?.classList.add('container');
    mainMenu?.classList.add('main-navbar', 'hor-menu');
    mainContainer.forEach((e, i) => {
      e?.classList.add('container');
    });
    sideMenu?.classList.add('flex-nowrap');

    // remove
    body?.classList.remove('default-menu', 'leftmenu', 'main-body', 'main-sidebar-hide', 'main-sidebar-open');
    mainHeader?.classList.remove('sticky');
    mainMenu?.classList.remove('main-sidebar', 'main-sidebar-sticky', 'side-menu');
    sideMenu?.classList.remove('flex-wrap');
    mainContainer.forEach((e, i) => {
      e?.classList.remove('container-fluid');
    });
    mainContainer1?.classList.remove('main-sidebar-header');
    mainBody1?.classList.remove('main-sidebar-body');

    sidebarFn.checkHoriMenu();

    let horizontalHover = document.getElementById('myonoffswitch03') as HTMLInputElement;
    horizontalHover.checked = true;
    setTimeout(()=>{
      let mainContent = document.querySelector('.main-content');
      let menuIcon = document.querySelectorAll('.menu-icon');
      
      
      mainContent?.classList.add('hor-content');
      menuIcon.forEach((e, i) => {
        e?.classList.add('hor-icon');
      });
      
      mainContent?.classList.remove('side-content');
      menuIcon.forEach((e, i) => {
        e?.classList.remove('sidemenu-icon');
      });
    },0)
  }
}

export function handleThemeUpdate(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue: any) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: any, chunkSize: any) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: any, alpha: any) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue: any, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTrasnsparentPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

export function customClickFn() {
  let body = document.querySelector('body');
  let html = document.querySelector('html');
  let styleId = document.querySelector('#style');
  // switcher elements
  let ltr = document.querySelectorAll('#myonoffswitch19');
  let rtl = document.querySelectorAll('#myonoffswitch20');
  let vertical = document.querySelectorAll('#myonoffswitch01');
  let horizontal = document.querySelectorAll('#myonoffswitch02');
  let horizontalHover = document.querySelectorAll('#myonoffswitch03');
  let lightBtn = document.getElementById('myonoffswitch1') as HTMLInputElement;
  let darkBtn = document.getElementById('myonoffswitch2') as HTMLInputElement;
  let lightMenu: any = document.querySelector('#myonoffswitch3');
  let colorMenu: any = document.querySelector('#myonoffswitch4');
  let gradientMenu: any = document.querySelector('#myonoffswitch4b');
  let darkMenu: any = document.querySelector('#myonoffswitch5');
  let lightHeader: any = document.querySelector('#myonoffswitch6');
  let darkHeader: any = document.querySelector('#myonoffswitch8');
  let colorHeader: any = document.querySelector('#myonoffswitch7');
  let defaultTheme: any = document.querySelector('#myonoffswitch9');
  let boxed: any = document.querySelector('#myonoffswitch10');
  let defaultPosition: any = document.querySelector('#myonoffswitch11');
  let scrollable: any = document.querySelector('#myonoffswitch12');
  // inner component elements
  let mainContent = document.querySelector('.main-content');
  let mainContainer = document.querySelectorAll('.main-container');
  let mainContainer1 = document.querySelector('.main-container-1');
  let mainBody1 = document.querySelector('.main-body-1');
  let mainMenu = document.querySelector('.main-menu');
  let mainHeader = document.querySelector('.main-header');
  let sideMenu = document.querySelector('.horizontal .menu-nav');

  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.css'
    );
    //remove
    body?.classList.remove('rtl');
    sidebarFn.checkHoriMenu();
    localStorage.removeItem('SpruhaRtl');
  });
  // RTL
  fromEvent(rtl, 'click').subscribe(() => {
    //add
    body?.classList.add('rtl');
    html?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
    localStorage.setItem('SpruhaRtl', 'true');
  });
  // Layouts
  fromEvent(vertical, 'click').subscribe(() => {
    let menuIcon = document.querySelectorAll('.menu-icon');
    //add
    body?.classList.add('leftmenu', 'main-body');
    mainContent?.classList.add('side-content');
    mainContainer.forEach((e, i) => {
      e?.classList.add('container-fluid');
    });
    mainHeader?.classList.add('sticky');
    mainMenu?.classList.add('main-sidebar', 'main-sidebar-sticky', 'side-menu');
    mainContainer1?.classList.add('main-sidebar-header');
    mainBody1?.classList.add('main-sidebar-body');
    menuIcon.forEach(e => {
      e?.classList.add('sidemenu-icon');
    });

    //remove
    body?.classList.remove('horizontalmenu', 'horizontalmenu-hover');
    mainContent?.classList.remove('hor-content');
    mainHeader?.classList.remove('hor-header');
    mainContainer.forEach((e, i) => {
      e?.classList.remove('container');
    });
    mainContainer1?.classList.remove('container');
    mainMenu?.classList.remove('main-navbar', 'hor-menu');
    menuIcon.forEach(e => {
      e?.classList.remove('hor-icon');
    });

    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    localStorage.removeItem('SpruhaHorizontal');
    localStorage.removeItem('SpruhaHorizontalHover');
  });
  fromEvent(horizontal, 'click').subscribe(() => {
    let menuIcon = document.querySelectorAll('.menu-icon');
    //add
    body?.classList.add('horizontalmenu');
    menuIcon.forEach(e => {
      e?.classList.add('hor-icon');
    });
    mainContent?.classList.add('hor-content');
    mainHeader?.classList.add('hor-header');
    mainContainer1?.classList.add('container');
    mainContainer.forEach((e, i) => {
      e?.classList.add('container');
    });
    mainMenu?.classList.add('main-navbar', 'hor-menu');
    sideMenu?.classList.add('flex-nowrap');

    // remove
    body?.classList.remove('horizontalmenu-hover', 'leftmenu', 'main-body', 'main-sidebar-hide', 'main-sidebar-open');
    sideMenu?.classList.remove('flex-wrap');
    mainContainer1?.classList.remove('main-sidebar-header');
    mainMenu?.classList.remove('main-sidebar', 'main-sidebar-sticky', 'side-menu');
    mainBody1?.classList.remove('main-sidebar-body');
    menuIcon.forEach(e => {
      e?.classList.remove('sidemenu-icon');
    });
    mainContent?.classList.remove('side-content');
    mainHeader?.classList.remove('sticky');
    mainContainer.forEach((e, i) => {
      e?.classList.remove('container-fluid');
    });

    sidebarFn.checkHoriMenu();
    localStorage.setItem('SpruhaHorizontal', 'true');
    localStorage.removeItem('SpruhaHorizontalHover');
  });
  fromEvent(horizontalHover, 'click').subscribe(() => {
    let menuIcon = document.querySelectorAll('.menu-icon');
    //add
    body?.classList.add('horizontalmenu');
    body?.classList.add('horizontalmenu-hover');
    mainContent?.classList.add('hor-content');
    mainHeader?.classList.add('hor-header');
    mainContainer1?.classList.add('container');
    mainMenu?.classList.add('main-navbar', 'hor-menu');
    menuIcon.forEach(e => {
      e?.classList.add('hor-icon');
    });
    mainContainer.forEach((e, i) => {
      e?.classList.add('container');
    });
    sideMenu?.classList.add('flex-nowrap');

    // remove
    body?.classList.remove('default-menu', 'leftmenu', 'main-body', 'main-sidebar-hide', 'main-sidebar-open');
    mainHeader?.classList.remove('sticky');
    mainContent?.classList.remove('side-content');
    mainMenu?.classList.remove('main-sidebar', 'main-sidebar-sticky', 'side-menu');
    sideMenu?.classList.remove('flex-wrap');
    mainContainer.forEach(e => {
      e?.classList.remove('container-fluid');
    });
    mainContainer1?.classList.remove('main-sidebar-header');
    mainBody1?.classList.remove('main-sidebar-body');
    
    menuIcon.forEach(e => {
      e?.classList.remove('sidemenu-icon')
    });

    sidebarFn.checkHoriMenu();
    localStorage.setItem('SpruhaHorizontalHover', 'true');
    localStorage.removeItem('SpruhaHorizontal');
  });
  // Theme
  fromEvent(lightBtn, 'click').subscribe(() => {
    localStorage.clear();
    lightBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('light-theme');
    localStorage.setItem('SpruhaLightTheme', 'true');
    // remove
    localStorage.removeItem('SpruhaDarkTheme');
    document.querySelector('body')?.classList.remove('dark-theme');
  });
  fromEvent(darkBtn, 'click').subscribe(() => {
    localStorage.clear();
    darkBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('dark-theme');

    localStorage.setItem('SpruhaDarkTheme', 'true');
    // remove
    localStorage.removeItem('SpruhaLightTheme');
    document.querySelector('body')?.classList.remove('light-theme');
  });
  // layout width  style
  fromEvent(defaultTheme, 'click').subscribe(() => {
    body?.classList.add('layout-fullwidth');
    body?.classList.remove('layout-boxed');
    sidebarFn.checkHoriMenu();
  });
  fromEvent(boxed, 'click').subscribe(() => {
    body?.classList.add('layout-boxed');
    body?.classList.remove('layout-fullwidth');
    sidebarFn.checkHoriMenu();
  });
  // default position
  fromEvent(defaultPosition, 'click').subscribe(() => {
    body?.classList.add('fixed-layout');
    body?.classList.remove('scrollable-layout');
  });
  // scrollable
  fromEvent(scrollable, 'click').subscribe(() => {
    body?.classList.add('scrollable-layout');
    body?.classList.remove('fixed-layout');
  });
  // menu
  fromEvent(lightMenu, 'click').subscribe(() => {
    body?.classList.add('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('dark-menu');
  });
  fromEvent(colorMenu, 'click').subscribe(() => {
    body?.classList.add('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('dark-menu');
  });
  fromEvent(gradientMenu, 'click').subscribe(() => {
    body?.classList.add('gradient-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
  });
  fromEvent(darkMenu, 'click').subscribe(() => {
    body?.classList.add('dark-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('light-menu');
  });
  // header
  fromEvent(lightHeader, 'click').subscribe(() => {
    body?.classList.add('header-light');
    body?.classList.remove('color-header');
    body?.classList.remove('header-dark');
  });
  fromEvent(darkHeader, 'click').subscribe(() => {
    body?.classList.add('header-dark');
    body?.classList.remove('header-light');
    body?.classList.remove('color-header');
  });
  fromEvent(colorHeader, 'click').subscribe(() => {
    body?.classList.add('color-header');
    body?.classList.remove('header-light');
    body?.classList.remove('header-dark');
  });
}

export function checkOptions() {
  // light header
  if (document.querySelector('body')?.classList.contains('header-light')) {
    let light = document.getElementById('myonoffswitch6') as HTMLInputElement;
    light.checked = true;
  }
  // color header
  if (document.querySelector('body')?.classList.contains('color-header')) {
    let color = document.getElementById('myonoffswitch7') as HTMLInputElement;
    color.checked = true;
  }
  // dark header
  if (document.querySelector('body')?.classList.contains('header-dark')) {
    let dark = document.getElementById('myonoffswitch8') as HTMLInputElement;
    dark.checked = true;
  }

  // light menu
  if (document.querySelector('body')?.classList.contains('light-menu')) {
    let light = document.getElementById('myonoffswitch3') as HTMLInputElement;
    light.checked = true;
  }
  // color menu
  if (document.querySelector('body')?.classList.contains('color-menu')) {
    let color = document.getElementById('myonoffswitch4') as HTMLInputElement;
    color.checked = true;
  }
  // gradient menu
  if (document.querySelector('body')?.classList.contains('gradient-menu')) {
    let gradient = document.getElementById('myonoffswitch4b') as HTMLInputElement;
    gradient.checked = true;
  }
  // dark menu
  if (document.querySelector('body')?.classList.contains('dark-menu')) {
    let dark = document.getElementById('myonoffswitch5') as HTMLInputElement;
    dark.checked = true;
  }
  // dark menu
  if (document.querySelector('body')?.classList.contains('rtl')) {
    let rtl = document.getElementById('myonoffswitch20') as HTMLInputElement;
    rtl.checked = true;
  }
  // dark menu
  if (document.querySelector('body')?.classList.contains('horizontalmenu')) {
    let horizontal = document.getElementById(
      'myonoffswitch02'
    ) as HTMLInputElement;
    horizontal.checked = true;
  }
  // dark menu
  if (
    document.querySelector('body')?.classList.contains('horizontalmenu-hover')
  ) {
    let horizontlHover = document.getElementById(
      'myonoffswitch03'
    ) as HTMLInputElement;
    horizontlHover.checked = true;
  }
}

let myVarVal;
export function updateChanges() {
  let primaryColorVal = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-bg-color')
    .trim();

  //get variable
  myVarVal =
    localStorage.getItem('Spruhalight-primary-color') ||
    localStorage.getItem('Spruhadark-primary-color') ||
    primaryColorVal;
  document
    .querySelector('html')
    ?.style.setProperty('--primary-bg-color', myVarVal);

  let colorData1 = hexToRgba(myVarVal, 0.1);
  document.querySelector('html')?.style.setProperty('--primary01', colorData1);
  let colorData2 = hexToRgba(myVarVal, 0.2);
  document.querySelector('html')?.style.setProperty('--primary02', colorData2);

  let colorData5 = hexToRgba(myVarVal, 0.5);
  document.querySelector('html')?.style.setProperty('--primary05', colorData5);
  let colorData9 = hexToRgba(myVarVal, 0.9);
  document.querySelector('html')?.style.setProperty('--primary09', colorData9);
  let colorData8 = hexToRgba(myVarVal, 0.8);
  document.querySelector('html')?.style.setProperty('--primary08', colorData8);
}
