import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SwitcherService } from '../../services/switcher.service';
import { checkHoriMenu } from '../sidemenu/sidemenu';
import * as switcher from './customizer';

@Component({
  selector: 'app-customizer',
  standalone:false,
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
})
export class CustomizerComponent implements OnInit, AfterViewInit {
  body = document.querySelector('body');
  layoutSub: Subscription;

  @ViewChild('switcher', { static: false }) switcher!: ElementRef;

  constructor(
    public renderer: Renderer2,
    public switcherService: SwitcherService
  ) {
    this.layoutSub = switcherService.SwitcherChangeEmitted.subscribe(
      (value) => {
        if (value) {
          this.renderer.addClass(this.switcher.nativeElement, 'active');
          this.renderer.setStyle(this.switcher.nativeElement, 'right', '0px');
          value = true;
        } else {
          this.renderer.removeClass(this.switcher.nativeElement, 'active');
          this.renderer.setStyle(
            this.switcher.nativeElement,
            'right',
            '-270px'
          );
          value = false;
        }
      }
    );
  }

  ngAfterViewInit() {
 
  }

  ngOnInit(): void {
    switcher.localStorageBackUp();
    switcher.customClickFn();
    switcher.updateChanges();
    switcher.checkOptions();
  }
  reset() {
    localStorage.clear();
    let html: any = document.querySelector('html');
    let body = document.querySelector('body');
    html.style = '';
    body?.classList.add('header-light');
    body?.classList.add('dark-menu');

    body?.classList.remove('dark-theme');
    body?.classList.remove('header-dark');
    body?.classList.remove('color-header');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('scrollable-layout');
    body?.classList.remove('layout-boxed');
    switcher.updateChanges();
    switcher.checkOptions();
    let primaryColorVal = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-bg-color')
      .trim();

    document
      .querySelector('html')
      ?.style.setProperty('--primary-bg-color', primaryColorVal);
    // horizontal to vertical
    let mainContent = document.querySelector('.main-content');
    let mainContainer = document.querySelectorAll('.main-container');
    let mainContainer1 = document.querySelector('.main-container-1');
    let mainBody1 = document.querySelector('.main-body-1');
    let mainMenu = document.querySelector('.main-menu');
    let mainHeader = document.querySelector('.main-header');
    let styleId = document.querySelector('#style');

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

    // rtl to ltr
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute('href','./assets/plugins/bootstrap/css/bootstrap.min.css');
    //remove
    body?.classList.remove('rtl');
    checkHoriMenu();

    let vertical = document.getElementById('myonoffswitch01') as HTMLInputElement;
    vertical.checked = true;
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;
    let ltr = document.getElementById('myonoffswitch19') as HTMLInputElement;
    ltr.checked = true;
    let defaultLayout = document.getElementById('myonoffswitch9') as HTMLInputElement;
    defaultLayout.checked = true;
    let defaultPosition = document.getElementById('myonoffswitch11') as HTMLInputElement;
    defaultPosition.checked = true;
  }

  public color1: string = '#6259ca';
  public color2: string = '#6259ca';

  public dynamicLightPrimary(data: any): void {
    this.color1 = data.color;

    const dynamicPrimaryLight = document.querySelectorAll(
      'input.color-primary-light'
    );

    switcher.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);

    localStorage.setItem('Spruhalight-primary-color', this.color1);
    localStorage.setItem('Spruhalight-primary-hover', this.color1);
    localStorage.setItem('Spruhalight-primary-border', this.color1);
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    // Adding
    this.body?.classList.add('light-theme');
    localStorage.setItem('SpruhaLightTheme', 'true');

    // removing
    localStorage.removeItem('SpruhaDarkTheme');
    this.body?.classList.remove('dark-theme');

    localStorage.removeItem('Spruhadark-primary-color');
    switcher.checkOptions();
    switcher.updateChanges();
  }
  public dynamicDarkPrimary(data: any): void {
    this.color2 = data.color;

    const dynamicPrimaryDark = document.querySelectorAll(
      'input.color-primary-dark'
    );

    switcher.dynamicDarkPrimaryColor(dynamicPrimaryDark, this.color2);

    localStorage.setItem('Spruhadark-primary-color', this.color2);
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;

    // Adding
    this.body?.classList.add('dark-theme');
    localStorage.setItem('SpruhaDarkTheme', 'true');

    // removing
    localStorage.removeItem('SpruhaLightTheme');
    this.body?.classList.remove('light-theme');

    localStorage.removeItem('Spruhalight-primary-color');
    localStorage.removeItem('Spruhalight-primary-hover');
    localStorage.removeItem('Spruhalight-primary-border');
    switcher.checkOptions();
    switcher.updateChanges();
  }
}
