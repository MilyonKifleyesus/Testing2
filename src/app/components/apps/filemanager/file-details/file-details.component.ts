import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { Gallery, GalleryItem, GalleryModule, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import {  Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { RouterModule } from '@angular/router';
import { SpkGalleryComponent } from '../../../../@spk/reusable-plugins/spk-gallery/spk-gallery.component';
import { SpkReusableTablesComponent } from "../../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";

@Component({
  selector: 'app-file-details',
  standalone: true,
  imports: [SharedModule, CarouselModule, NgbModule, GalleryModule, LightboxModule, RouterModule, SpkGalleryComponent, SpkReusableTablesComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './file-details.component.html',
  styleUrl: './file-details.component.scss'
})
export class FileDetailsComponent {
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;
  accodionClass: any;
  ngAfterViewInit() {

    const swiperE2 = this.swiperContainer1.nativeElement;

    Object.assign(swiperE2, {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
          700:{
            slidesPerView: 4,
            spaceBetween: 20,
          } ,       
        1110: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

      },
    }
    );
  }
  customOptions: OwlOptions = {
    loop: true,
    rtl:false,
    mouseDrag: true,
    touchDrag: true,
    margin:10,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    navText: ['<', '>'],
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {items: 1},
      400: { items: 2 },
      740: {  items: 4},
      1000: { items: 4},
    },
    nav: true,
  };

  activeSlides!: SlidesOutputData;

  slidesStore: any[] = [
    {
      src: './assets/images/files/jpg/9.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
    {
      src: './assets/images/files/jpg/8.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
    {
      src: './assets/images/files/jpg/7.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
    {
      src: './assets/images/files/jpg/6.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
    {
      src: './assets/images/files/jpg/5.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
    {
      src: './assets/images/files/jpg/4.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
    {
      src: './assets/images/files/jpg/2.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
    {
      src: './assets/images/files/jpg/1.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
    {
      src: './assets/images/files/jpg/3.jpg',
      file:"221.jpg",
      size:"120 KB"
      
    },
  
  ];

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  ngOnInit(): void {
 
 
    const ltr = this.elementRef.nativeElement.querySelectorAll('#switcher-ltr');
    const rtl = this.elementRef.nativeElement.querySelectorAll('#switcher-rtl');

    fromEvent(ltr, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: false };
    });

    fromEvent(rtl, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: true, autoplay: true };
    });

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  
  }

 constructor(public gallery: Gallery, public lightbox: Lightbox,private sanitizer: DomSanitizer,private elementRef: ElementRef ) {}
  items: GalleryItem[] = [];

  imageData=DATA;
  fileDetails = [
    { key: 'File-name', value: 'image.jpg' },
    { key: 'File-size', value: '12.45mb' },
    { key: 'uploaded-date', value: '01-12-2020' },
    { key: 'uploaded-by', value: 'prityy abodh' },
    { key: 'image-width', value: '1000' },
    { key: 'image-height', value: '600' },
    { key: 'File-formate', value: 'jpg' },
    { key: 'File-location', value: 'storage/photos/image.jpg' },
  ];

}

const DATA = [
  {
    id:1,
    srcUrl: "./assets/images/files/jpg/8.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    previewUrl: "./assets/images/files/jpg/8.jpg",
  },
  {
    id:2,
    srcUrl: "./assets/images/files/jpg/6.jpg",
    previewUrl: "./assets/images/files/jpg/6.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:3,
    srcUrl: "./assets/images/files/jpg/7.jpg",
    previewUrl: "./assets/images/files/jpg/7.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:4,
    srcUrl: "./assets/images/files/jpg/2.jpg",
    previewUrl: "./assets/images/files/jpg/2.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:5,
    srcUrl: "./assets/images/files/jpg/5.jpg",
    previewUrl: "./assets/images/files/jpg/5.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:6,
    srcUrl: "./assets/images/files/jpg/4.jpg",
    previewUrl: "./assets/images/files/jpg/4.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:7,
    srcUrl: "./assets/images/files/jpg/3.jpg",
    previewUrl: "./assets/images/files/jpg/3.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },
  {
    id:8,
    srcUrl: "./assets/images/files/jpg/9.jpg",
    previewUrl: "./assets/images/files/jpg/9.jpg",
    colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
  },

];
