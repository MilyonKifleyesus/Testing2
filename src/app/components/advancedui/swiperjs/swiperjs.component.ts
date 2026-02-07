import { CUSTOM_ELEMENTS_SCHEMA, Component,  ElementRef,  Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-swiperjs',
  standalone: true,
  imports: [SharedModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiperjs.component.html',
  styleUrls: ['./swiperjs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperjsComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;
  @ViewChild('swiperContainer2') swiperContainer2!: ElementRef;
  @ViewChild('swiperContainer3') swiperContainer3!: ElementRef;
  @ViewChild('swiperContainer4') swiperContainer4!: ElementRef;
  @ViewChild('swiperContainer5') swiperContainer5!: ElementRef;
  @ViewChild('swiperContainer6') swiperContainer6!: ElementRef;
  constructor(private renderer: Renderer2) {
    setTimeout(() => {
      const svgs = document.querySelectorAll('.swiper-button-next svg, .swiper-button-prev svg');
      svgs.forEach(svg => {
        svg.setAttribute('width', '10px');  // Set your desired width
        svg.setAttribute('height', '10px'); // Set your desired height
      });
    }, 1000);
  }
  @ViewChild('swiperButtonNext') swiperButtonNext!: ElementRef;
  @ViewChild('swiperButtonPrev') swiperButtonPrev!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiperContainer.nativeElement;
  
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  }
    );
    
    swiperEl.initialize();
    const swiperE2 = this.swiperContainer1.nativeElement;
		Object.assign(swiperE2, {
		  slidesPerView: 1,
		  spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      injectStyles: [
        `
        :host(.red) .swiper-wrapper {
          background-color: red;
        }
        `,
      ],
      injectStylesUrls: ['./swiperjs.component.scss', 'path/to/two.css'],
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });

    const swiperE3 = this.swiperContainer2.nativeElement;
		Object.assign(swiperE3, {
 
		  slidesPerView: 1,
		  spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			  },
			1110: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},

		  },
	  });
    swiperE3.initialize();
    const swiperE4 = this.swiperContainer3.nativeElement;
		Object.assign(swiperE4, {
		  slidesPerView: 1,
		  spaceBetween: 10,
      direction:"vertical",
      mousewheel:true,
      pagination:{
        clickable:true
      },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
			1020: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE5 = this.swiperContainer4.nativeElement;
		Object.assign(swiperE5, {
		  slidesPerView: 1,
		  spaceBetween: 10,
      direction:"vertical",
      mousewheel:true,
      pagination:{
        clickable:true
      },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
			1020: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE6 = this.swiperContainer5.nativeElement;
		Object.assign(swiperE6, {
		  slidesPerView: 1,
		  spaceBetween: 10,
      direction:"vertical",
      mousewheel:true,
      pagination:{
        clickable:true
      },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
			1020: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE7 = this.swiperContainer6.nativeElement;
		Object.assign(swiperE7, {
		  slidesPerView: 5,
		  spaceBetween: 10,
      pagination:{
        clickable:true
      },
		  breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 10,
			  },
        400:{
          slidesPerView: 5,
          spaceBetween: 10,
        },
		  },
	  });
    setTimeout(() => {
      this.overrideSvgStyles();
    }, 0); // Use a timeout to wait for rendering
  }

  overrideSvgStyles() {
    const nextButtonSvg = document.querySelector('.swiper-button-next svg');
    const prevButtonSvg = document.querySelector('.swiper-button-prev svg');

    if (nextButtonSvg) {
      nextButtonSvg.setAttribute('width', '10px');
      nextButtonSvg.setAttribute('height', '10px');
    }
    if (prevButtonSvg) {
      prevButtonSvg.setAttribute('width', '10px');
      prevButtonSvg.setAttribute('height', '10px');
    }
  }



  imageData = [
    {
      src: "./assets/images/media/media-26.jpg",
    },
    {
      src: "./assets/images/media/media-25.jpg",
    },
    {
      src: "./assets/images/media/media-27.jpg",
    },
  ];
  imageData1 = [
    {
      src: './assets/images/media/media-29.jpg',
    },
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-30.jpg',
    },
  ];
  imageData2 = [
    {
      src: "./assets/images/media/media-32.jpg",
    },
    {
      src: "./assets/images/media/media-31.jpg",
    },
    {
      src: "./assets/images/media/media-33.jpg",
    },
  ];
  imageData3 = [
    {
      src: "./assets/images/media/media-16.jpg",
    },
    {
      src: "./assets/images/media/media-17.jpg",
    },
    {
      src: "./assets/images/media/media-21.jpg",
    },
  ];
  imageData4 = [
    {
      src: "./assets/images/media/media-8.jpg",
    },
    {
      src: "./assets/images/media/media-5.jpg",
    },
    {
      src: "./assets/images/media/media-12.jpg",
    },
    
  ];
  
  imageData5 = [
    {
      src: "./assets/images/media/media-31.jpg",
    },
    {
      src: "./assets/images/media/media-30.jpg",
    },
    {
      src: "./assets/images/media/media-16.jpg",
    },
   
  ];
  imageData6 = [
    {
      src: "./assets/images/media/media-33.jpg",
    },
    {
      src:"./assets/images/media/media-25.jpg",
    },
    {
      src:"./assets/images/media/media-5.jpg",
    },

  ];
  imageData7 = [
    {
      src: "./assets/images/media/media-30.jpg",
    },
    {
      src: "./assets/images/media/media-28.jpg" ,
    },
    {
      src: "./assets/images/media/media-29.jpg" ,
    },
   
  ];
  
  imageData8 = [
    {
      src: './assets/images/media/media-8.jpg',
    },
    {
      src: './assets/images/media/media-32.jpg',
    },
    {
      src: './assets/images/media/media-17.jpg',
    },
   
  ];





  imageData9 = [
    {
      src: "./assets/images/media/media-30.jpg",
    },
    {
      src:"./assets/images/media/media-28.jpg",
    },
    {
      src: "./assets/images/media/media-32.jpg",
    },
  
  ];
  imageData10 = [
    {
      src: "./assets/images/media/media-12.jpg",
    },
    {
      src: "./assets/images/media/media-31.jpg",
    },
    {
      src: "./assets/images/media/media-8.jpg",
    },

  ];
  imageData11 = [
    {
      src: "./assets/images/media/media-28.jpg",
    },
    {
      src: "./assets/images/media/media-30.jpg",
    },
    {
      src: "./assets/images/media/media-32.jpg",
    },
  ];
  imageData12 = [
   
    {
      src: "./assets/images/media/media-63.jpg",
    },
    {
      src: "./assets/images/media/media-64.jpg",
    },
    {
      src: "./assets/images/media/media-62.jpg",
    },
  ];
  imageData13 = [
    {
      src: "./assets/images/media/media-18.jpg",
    },
    {
      src: "./assets/images/media/media-20.jpg",
    },
    {
      src: "./assets/images/media/media-19.jpg",
    },
  ];
  imageData14 = [
    {
      src: "./assets/images/media/media-20.jpg",
    },
    {
      src: "./assets/images/media/media-62.jpg",
    },
    {
      src: "./assets/images/media/media-63.jpg",
    },
  ];
  imageData15=[
    {
      src: "./assets/images/media/media-40.jpg",
    },
    {
      src: "./assets/images/media/media-41.jpg",
    },
    {
      src: "./assets/images/media/media-42.jpg",
    },
    {
      src: "./assets/images/media/media-43.jpg",
    },
    {
      src: "./assets/images/media/media-44.jpg",
    },
    {
      src: "./assets/images/media/media-59.jpg",
    },
    {
      src: "./assets/images/media/media-46.jpg",
    },
    {
      src: "./assets/images/media/media-61.jpg",
    },
  ]
  
}