import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkImageCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-image-card/spk-image-card.component';
import { CommonModule } from '@angular/common';
import { SpkHorizontalCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-horizontal-card/spk-horizontal-card.component';
import { SpkBgcolorCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-bgcolor-card/spk-bgcolor-card.component';
import { SpkBorderCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-border-card/spk-border-card.component';
import { SpkCardgroupsCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-cardgroups-card/spk-cardgroups-card.component';
import { SpkGridcardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-gridcard/spk-gridcard.component';
import { SpkUtilitiesCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-utilities-card/spk-utilities-card.component';
import { SpkNavigationCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-navigation-card/spk-navigation-card.component';
import { SpkAlignmentCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-alignment-card/spk-alignment-card.component';
import { SpkCollapseCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-collapse-card/spk-collapse-card.component';
import { SpkMountainsCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-mountains-card/spk-mountains-card.component';
import { SpkListgroupCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-listgroup-card/spk-listgroup-card.component';
import { SpkGridmarkupCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-gridmarkup-card/spk-gridmarkup-card.component';
import { SpkOverlayCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-overlay-card/spk-overlay-card.component';
import { SpkTitleCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-title-card/spk-title-card.component';
import { SpkFeaturedCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-featured-card/spk-featured-card.component';
import { SpkBlockquoteCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-blockquote-card/spk-blockquote-card.component';
import { SpkHeaderFooterCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-header-footer-card/spk-header-footer-card.component';
import { SpkCalculationsCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-calculations-card/spk-calculations-card.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkCustomCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-custom-card/spk-custom-card.component';
import { SpkReviewCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-review-card/spk-review-card.component';
import { SpkNewsCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-news-card/spk-news-card.component';
import { SpkMediaCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-media-card/spk-media-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { SpkLinkCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-link-card/spk-link-card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [SharedModule,NgbModule,SpkImageCardComponent,SpkLinkCardComponent,
    CommonModule,SpkHorizontalCardComponent,SpkBgcolorCardComponent,SpkFeaturedCardComponent,SpkBlockquoteCardComponent,
    SpkAlignmentCardComponent,SpkMountainsCardComponent,SpkGridmarkupCardComponent,SpkOverlayCardComponent,SpkTitleCardComponent,SpkNewsCardComponent,SpkMediaCardComponent,
    SpkHeaderFooterCardComponent,SpkCustomCardComponent,SpkReviewCardComponent,SpkBorderCardComponent,SpkCardgroupsCardComponent,SpkGridcardComponent,SpkUtilitiesCardComponent,SpkNavigationCardComponent,SpkCollapseCardComponent,SpkListgroupCardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  constructor( private sanitizer: DomSanitizer) { }

getSanitizedSVG(svgContent: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(svgContent);
} 
  featuredCards = [
    {
      header: 'Featured',
      title: 'Special title treatment',
      text: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
      buttonText: 'Read More',
      buttonClass: 'btn-primary',
      links: []
    },
    {
      header: '',
      title: 'Card title',
      subtitle: 'Card subtitle',
      subtitleClass:'mb-3',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available there are so many ways to solve but the majority.',
      buttonText: '',
      links: [
        { text: 'Buy Now', href: 'javascript:void(0);', class: 'text-danger m-1' },
        { text: 'Review', href: 'javascript:void(0);', class: 'text-success m-1' }
      ]
    }
  ];

  blockquotes = [
    {
      quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      author: 'Someone famous as',
      sourceTitle: 'Source Title',
      cardBg:'',
      cardBody:'',
      textColor:'',
      textColor1:'mt-2',
    },
   
  ];
  blockquotes1 = [
    {
      quote: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..',
      author: 'Someone famous as',
      textColor:'text-fixed-white',
      textColor1:'text-fixed-white op-7 mt-2',
      sourceTitle: '-Helen Keller',
      cardBg:'card-bg-primary'
    },
  ];
  headerFooterCard = [
    {
      headerIcon: 'ri-heart-fill text-danger',
      avatar: './assets/images/faces/5.jpg',
      avatarSize: 'avatar-xl',
      bodyTitle: 'Sasha Max',
      bodyText: 'Web Developer',
      buttons: [
        { text: 'Facebook', class: 'btn-icon btn-facebook', action: () => console.log('Facebook clicked') },
        { text: 'Twitter', class: 'btn-icon btn-twitter', action: () => console.log('Twitter clicked') },
        { text: 'Instagram', class: 'btn-icon btn-instagram', action: () => console.log('Instagram clicked') }
      ]
    },
    {
      headerTitle: 'Calculations',
      bodyText: 'Lorem Ipsum is therefore always free from repetition, injected humour.',
      footerText: '11.32pm'
    },
    {
      ratings: 4,
      bodyTitle: 'Very Great!',
      bodyText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      timestamp: '1 year ago',
      avatar: './assets/images/faces/12.jpg'
    },
    {
      bodyTitle: 'Angelina Caprio',
      bodyText: 'Angular Developer',
      stats: [
        { label: 'Posts', value: '25' },
        { label: 'Followers', value: '1253' },
        { label: 'Following', value: '367' }
      ],
      footerText: 'Angular Expert'
    }
  ];
  // calculationsCard = [
  //   {
  //     svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  //       <path fill="#C6CDD1" d="M19 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z"/>
  //       <path fill="#C6CDD1" d="M11 1H3a2 2 0 0 0-2 2v8h10V1z"/>
  //       <path fill="#A1ABB2" d="M21 11V3a2 2 0 0 0-2-2h-8v10h10z"/>
  //       <circle cx="16" cy="16" r="7" fill="#136ad0"/>
  //     </svg>`,
  //     title: 'Calculations',
  //     footerText: 'Lorem Ipsum is therefore always free from repetition, injected humour.',
  //     borderClass: 'border-primary'
  //   }
  // ];

  customCard = [
    {
      avatar: './assets/images/faces/11.jpg',
      name: 'Adam Smith',
      subtitle: '28 Years, Male',
      dropdownItems: ['Week', 'Month', 'Year'],
      bodyText: 'If you are going to use, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.',
      footerLeftText: '28,Nov 2024',
      footerRightText: 'Assistant Professor',
      footerRightTextClass: 'text-success'
    }
  ];
  reviews = [
    {
      rating: 4,
      timestamp: '1 year ago',
      reviewTitle: 'Very Great!',
      reviewText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      reviewerName: 'Corey Anderson',
      reviewerAvatar: './assets/images/faces/12.jpg'
    }
  ];
  newsCards = [
    {
      headerTitle: 'Featured',
      bodyTitle: 'Breaking News!',
      bodyText: 'With supporting text below as a natural lead-in to additional content.',
      primaryButton: { text: 'Read More', action: () => console.log('Read More clicked') },
      secondaryButton: { text: 'Close', action: () => console.log('Close clicked') },
      footerText: '11.32pm'
    }
  ];

  mediaCards = [
    {
      avatar: './assets/images/faces/12.jpg',
      stats: [
        { label: 'Posts', value: '25' },
        { label: 'Followers', value: '1253' },
        { label: 'Following', value: '367' }
      ],
      name: 'Angelina Caprio',
      jobTitle: 'Angular Developer',
      aboutText: 'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions',
      additionalText: ''
    }
  ];
  profiles = [
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'Sasha Max',
      jobTitle: 'Web Developer',
      socialMediaButtons: [
        { icon: 'ri-facebook-line', class: 'btn-facebook', action: () => console.log('Facebook clicked') },
        { icon: 'ri-twitter-x-line', class: 'btn-twitter', action: () => console.log('Twitter clicked') },
        { icon: 'ri-instagram-line', class: 'btn-instagram', action: () => console.log('Instagram clicked') }
      ]
    }
  ];
  
  titleCard = [ 
    {
      imageUrl: './assets/images/media/media-22.jpg',
      title: 'Card title',
      text: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      buttonText: 'Read More',
      footerText: 'Last updated 3 mins ago'
    },
 
  ];
  titleCard1 = [ 

    {
      imageUrl: './assets/images/media/media-24.jpg',
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      listItems: ['An item', 'A second item'],
      links: [
        { text: 'Card link', href: 'javascript:void(0);', class: 'text-primary' },
        { text: 'Another link', href: 'javascript:void(0);', class: 'text-secondary' }
      ]
    }
  ];
  markupCard = [
    {
      imageUrl: './assets/images/media/media-25.jpg',
      title: 'Product A',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Purchase',
      buttonClass: 'btn-primary'
    },
    {
      imageUrl: './assets/images/media/media-26.jpg',
      title: 'Product B',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Purchase',
      buttonClass: 'btn-secondary'
    },
    {
      imageUrl: './assets/images/media/media-27.jpg',
      title: 'Product C',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Purchase',
      buttonClass: 'btn-light'
    }
  ];

  listCards = [
    {
      header: '',
      items: ['An item', 'A second item', 'A third item', 'A fourth item'],
      footer: ''
    },
    {
      header: 'Featured',
      items: ['An item', 'A second item', 'A third item'],
      footer: ''
    },
    {
      header: '',
      items: ['An item', 'A second item', 'A third item'],
      footer: 'Card footer'
    }
  ];

  mountainCards = [
    {
      imageUrl: './assets/images/media/media-4.jpg',
      title: 'Mountains',
      badgeText: 'New',
      badgeClass: 'bg-primary',
      text: 'With supporting text below as a natural lead-in.'
    },
    {
      imageUrl: './assets/images/media/media-9.jpg',
      title: 'Hills',
      badgeText: 'Hot',
      badgeClass: 'bg-secondary',
      text: 'With supporting text below as a natural lead-in.'
    },
    {
      imageUrl: './assets/images/media/media-15.jpg',
      title: 'Nature',
      badgeText: 'Offer',
      badgeClass: 'bg-light text dark',
      text: 'With supporting text below as a natural lead-in.'
    }
  ];

  collapseCards = [
    {
      title: 'Card With Collapse Button',
      subtitle:'Collapsible Card',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      isCollapsible: true,
      isClosable: false,
      isFullscreenable: false
    },
    {
      title: 'Card With Close Button',
      subtitle:'Closed Card',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      isCollapsible: false,
      isClosable: true,
      isFullscreenable: false
    },
    {
      title: 'Card With Fullscreen Button',
      subtitle:'FullScreen Card',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      isCollapsible: false,
      isClosable: false,
      isFullscreenable: true
    }
  ];

  alignmentCards = [
    {
      title: 'Where it come from',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      buttonText: 'Go somewhere',
      imageUrl: './assets/images/faces/15.jpg',
      alignmentClass: '' 
    },
    {
      title: 'Why do we use it?',
      text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
      buttonText: 'Go somewhere',
      imageUrl: './assets/images/faces/3.jpg',
      alignmentClass: 'text-center' 
    },
    {
      title: 'What is special?',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
      buttonText: 'Go somewhere',
      imageUrl: './assets/images/faces/11.jpg',
      alignmentClass: 'text-end'
    },

  ];

  utiliesCards = [
    {
      title: 'Using Width 75%',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum omnis excepturi consequatur molestiae.',
      widthClass: 'w-75'
    },
    {
      title: 'Using Width 50%',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      widthClass: 'w-50'
    }
  ];

  navigationCards = [
    {
      title: 'Special title treatment',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Go somewhere',
      tabType: 'nav-tabs', // Indicates the type of tabs (tabs or pills)
      tabs: [
        { label: 'Active', link: 'javascript:void(0);', active: 'active', disabled: false },
        { label: 'Link', link: 'javascript:void(0);', active: '', disabled: false },
        { label: 'Disabled', link: '', active: '', disabled: true }
      ]
    },
    {
      title: 'Special title treatment',
      text: 'With supporting text below as a natural lead-in to additional content.',
      buttonText: 'Go somewhere',
      tabType: 'nav-pills', // Indicates the type of tabs (tabs or pills)
      tabs: [
        { label: 'Active', link: 'javascript:void(0);', active: 'active', disabled: false },
        { label: 'Link', link: 'javascript:void(0);', active: '', disabled: false },
        { label: 'Disabled', link: '', active: '', disabled: true }
      ]
    }
  ];

  imagecard = [
    {
      image:'./assets/images/media/media-29.jpg',
      title:'Image caps are widely used in Blogs',
      status:'Last updated 3 mins ago',
      TopImagePlacement:true,
      bottomImagePlacement:false,
      BottomStatusPlacement:false,
      customStatusPlacement:true,
      discriptionClass:'mb-3',
      discription:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
    },
    {
      title: "Image caps are widely used in Blog's",
      discription: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.",
      status: "Last updated 3 mins ago",
      image: "./assets/images/media/media-28.jpg",
      TopImagePlacement:false,
      bottomImagePlacement:true,
      BottomStatusPlacement:false,
      customStatusPlacement:true,
      discriptionClass:'mb-3',
    },
    {
      title: "Image caps are widely used in Blog's",
      discription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      status: "Last updated 3 mins ago",
      image: "./assets/images/media/media-30.jpg",
      position: "middle",
      TopImagePlacement:false,
      bottomImagePlacement:true,
      BottomStatusPlacement:true,
      customStatusPlacement:false,
      discriptionClass:'mb-1',
      imageClass:'card-img rounded-0',
    },
    {
      title: "Image caps are widely used in Blog's",
      discription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      status: "Last updated 3 mins ago",
      image: "./assets/images/media/media-31.jpg",
      position: "bottom",
      TopImagePlacement:false,
      bottomImagePlacement:true,
      BottomStatusPlacement:true,
      customStatusPlacement:false,
      imageClass:'card-img rounded-0',
      discriptionClass:'mb-3',
    },
    {
      headertitle: "Image caps are widely used in Blog's",
      discription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "./assets/images/media/media-32.jpg",
      position: "top",
      TopImagePlacement:true,
      bottomImagePlacement:false,
      BottomStatusPlacement:false,
      customStatusPlacement:true,
      footertext:true,
      discriptionClass:'mb-1',
    },
  
    {
      headertitle: "Image caps are widely used in Blog's",
      discription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "./assets/images/media/media-33.jpg",
      position: "bottom",
      TopImagePlacement:false,
      bottomImagePlacement1:true,
      BottomStatusPlacement:false,
      customStatusPlacement:true,
      discriptionClass:'mb-1',
      footertext:true
    }
  ];

  overlayCards = [
    {
      imageUrl: './assets/images/media/media-35.jpg',
      title: 'Image Overlays Are Awesome!',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even.',
      footerText: '',
      contentPosition: '' ,// Default position,
      status:true,
      contentClass:'text-truncate',
      headerClass:'border-bottom-0',
      content1:true
    },
    {
      imageUrl: './assets/images/media/media-36.jpg',
      bodyTitle: 'Image Overlays Are Awesome!',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even.',
      footerText: 'Last updated 3 mins ago',
      contentPosition: 'over-content-bottom',
      contentClass:'text-truncate',
      content1:true
    },
    {
      imageUrl: './assets/images/media/media-34.jpg',
      title: 'Image Overlays Are Awesome!',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even.',
      footerText: 'Last updated 3 mins ago',
      contentPosition: '' ,// Default position
      contentClass:'text-truncate',
      headerClass:'border-bottom-0',
    }
  ];
  horizontalCards = [
    {
      headerTitle: 'Horizontal Cards',
      subtitle: 'Horizontal cards are awesome!',
      body: 'This is a wider card with supporting text below as a natural.',
      lastUpdated: 'Last updated 3 mins ago',
      imageUrl: './assets/images/media/media-37.jpg',
      imgPosition: 'left',
      imagePlacementEnd:false,
      imagePlacementStart:true,
      title:false,


    },
    {
      headerTitle: 'Horizontal Cards',
      subtitle: 'Horizontal cards are awesome!',
      body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imageUrl: './assets/images/media/media-38.jpg',
      imgPosition: 'right',
      imagePlacementEnd:true,
      imagePlacementStart:false,
      title:false,
      bodyText:true
    },
    {
      title:true,
      subtitle: 'Horizontal cards',
      body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      lastUpdated: 'Last updated 3 mins ago',
      imageUrl: './assets/images/media/media-39.jpg',
      imgPosition: 'right',
      imagePlacementEnd:true,
      imagePlacementStart:false

    }
  ];

  colorCard = [
    {
      name: 'Gatin Leo',
      status: 'Finished by today',
      imageUrl: './assets/images/faces/11.jpg',
      bgClass: 'card-bg-primary',
      textClass: 'text-fixed-white'
    },
    
    {
      name: 'Elisha Corner',
      status: 'Completed 24 days back',
      imageUrl: './assets/images/faces/12.jpg',
      bgClass: 'card-bg-secondary',
      textClass: 'text-fixed-white'
    },
    {
      name: 'Sarah Alina',
      status: 'Completed today',
      imageUrl: './assets/images/faces/1.jpg',
      bgClass: 'card-bg-warning',
      textClass: 'text-fixed-white'
    },
    {
      name: 'Monica Karen',
      status: 'Pending from 4 days',
      imageUrl: './assets/images/faces/8.jpg',
      bgClass: 'card-bg-info',
      textClass: 'text-fixed-white'
    },
    {
      name: 'Samantha Sid',
      status: 'In leave for 1 month',
      imageUrl: './assets/images/faces/5.jpg',
      bgClass: 'card-bg-success',
      textClass: 'text-fixed-white'
    },
    {
      name: 'Sebastien Steyn',
      status: 'Completed by Tomorrow',
      imageUrl: './assets/images/faces/14.jpg',
      bgClass: 'card-bg-danger',
      textClass: 'text-fixed-white'
    },
    {
      name: 'Jacob Smith',
      status: 'Finished by 24, Nov',
      imageUrl: './assets/images/faces/13.jpg',
      bgClass: 'card-bg-light',
      textClass: 'text-muted',
    },
    {
      name: 'Pope Adam',
      status: 'Completed on 24, May',
      imageUrl: './assets/images/faces/16.jpg',
      bgClass: 'card-bg-dark',
      textClass: 'text-white',
      textClass1: 'text-white'
    }
  ];

  borderCards = [
    {
      title: 'Home Page Design',
      iconClass: 'text-primary',
      borderClass: 'border-primary',
      badges: ['Framework', 'Angular', 'Php'],
      badgeClasses: ['bg-primary-transparent', 'bg-secondary-transparent', 'bg-info-transparent'],
      avatars: ['./assets/images/faces/2.jpg', './assets/images/faces/8.jpg', './assets/images/faces/2.jpg']
    }, 
    {
      title: 'Landing Page Design',
      iconClass: 'text-secondary',
      borderClass: 'border-secondary',
      badges: ['Laravel', 'Codeignitor', 'Php'],
      badgeClasses: ['bg-danger-transparent', 'bg-teal-transparent', 'bg-success-transparent'],
      avatars: ['./assets/images/faces/4.jpg', './assets/images/faces/6.jpg']
    },
    {
      title: 'Update New Project',
      iconClass: 'text-warning',
      borderClass: 'border-warning',
      badges: ['Html', 'Bootstrap', 'React'],
      badgeClasses: ['bg-warning-transparent', 'bg-secondary-transparent', 'bg-info-transparent'],
      avatars: ['./assets/images/faces/1.jpg', './assets/images/faces/12.jpg', './assets/images/faces/10.jpg', './assets/images/faces/16.jpg']
    },
    {
      title: 'New Project Discussion',
      iconClass: 'text-info',
      borderClass: 'border-info',
      badges: ['React', 'Typescript'],
      badgeClasses: ['bg-info-transparent', 'bg-primary-transparent'],
      avatars: ['./assets/images/faces/3.jpg', './assets/images/faces/14.jpg', './assets/images/faces/11.jpg']
    },
    {
      title: 'Recent Projects Testing',
      iconClass: 'text-danger',
      borderClass: 'border-danger',
      badges: ['Ui', 'Angular', 'Java'],
      badgeClasses: ['bg-primary-transparent', 'bg-secondary-transparent', 'bg-info-transparent'],
      avatars: ['./assets/images/faces/15.jpg']
    },
    {
      title: 'About Us Page Redesign',
      iconClass: 'text-success',
      borderClass: 'border-success',
      badges: ['Html', 'Symphony', 'Php'],
      badgeClasses: ['bg-danger-transparent', 'bg-warning-transparent', 'bg-success-transparent'],
      avatars: ['./assets/images/faces/6.jpg', './assets/images/faces/9.jpg']
    },
    {
      title: 'New Employees',
      iconClass: 'text-default',
      borderClass: 'border-light',
      badges: ['Html', 'Cake Php', 'React'],
      badgeClasses: ['bg-warning-transparent', 'bg-info-transparent', 'bg-success-transparent'],
      avatars: ['./assets/images/faces/5.jpg', './assets/images/faces/6.jpg', './assets/images/faces/7.jpg']
    },
    {
      title: 'Terminated Employees',
      iconClass: 'text-dark',
      borderClass: 'border-dark',
      badges: ['Angular'],
      badgeClasses: ['bg-primary-transparent'],
      avatars: ['./assets/images/faces/9.jpg', './assets/images/faces/11.jpg', './assets/images/faces/12.jpg', './assets/images/faces/15.jpg']
    }
  ];

  groupCard = [
    {
      imageUrl: './assets/images/media/media-40.jpg',
      title: 'Delicious food is a blessing!',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      footer: 'Last updated 3 mins ago'
    },
    {
      imageUrl: './assets/images/media/media-41.jpg',
      title: 'Writing is an art.',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has longer content than first to show equal height action.',
      footer: 'Last updated 3 mins ago'
    },
    {
      imageUrl: './assets/images/media/media-42.jpg',
      title: 'Is office the best place to earn knowledge?',
      text: 'This card has supporting text below as a natural lead-in to additional content.This card has longer content',
      footer: 'Last updated 3 mins ago'
    }
  ];

  gridCards = [
 
    {
      imageUrl: './assets/images/media/media-44.jpg',
      title: 'Morphology of a typical fruit.',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
      imageUrl: './assets/images/media/media-43.jpg',
      title: 'Research improves ability & agility!',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
      imageUrl: './assets/images/media/media-45.jpg',
      title: 'Most tropical areas are suitable',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
      imageUrl: './assets/images/media/media-46.jpg',
      title: 'Are They seasonal fruits?',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    }
  ];

  linkCard = [
      {
        imageUrl: './assets/images/media/media-23.jpg',
        title: 'Forests are Awesome.',
        text:''
      },
    
  ] ;
  
  linkCard1 = [
    {
      imageUrl: './assets/images/media/media-23.jpg',
      title: '',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
     
    },
  
] ;

linkCard2 = [
  {
    title: '',
    text1:'It is a long established fact that a reader will be distracted by the readable content',
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  }

] ;

  areaCard = [
    {
      imageUrl: './assets/images/media/media-47.jpg',
      title: 'Most tropical areas are suitable',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
    },
  
]

foxCards = [
  {
    subtitle: 'Fox is Beautiful ?',
    body: `This is a wild animal with supporting tactics and are very efficient at kill,they are very Dangerous.
    Fox lives mainly in forests and are well known for their hunting skills.`,
    lastUpdated: 'Last updated 3 mins ago',
    imageUrl: './assets/images/media/media-39.jpg',
    imagePlacementEnd:true,
    imagePlacementStart:false

  },
]
}
