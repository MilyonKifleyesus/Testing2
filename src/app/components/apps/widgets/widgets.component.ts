import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkProgresscardsComponent } from '../../../@spk/reusable-widgets/spk-progresscards/spk-progresscards.component';
import { SpkInfocardComponent } from '../../../@spk/reusable-widgets/spk-infocard/spk-infocard.component';
import { SpkMetriccardComponent } from '../../../@spk/reusable-widgets/spk-metriccard/spk-metriccard.component';
import { SpkUsercardComponent } from '../../../@spk/reusable-widgets/spk-usercard/spk-usercard.component';
import { SpkConvertioncardComponent } from '../../../@spk/reusable-widgets/spk-convertioncard/spk-convertioncard.component';
import { SpkSummarycardComponent } from '../../../@spk/reusable-widgets/spk-summarycard/spk-summarycard.component';
import { SpkTeamcardComponent } from "../../../@spk/reusable-widgets/spk-teamcard/spk-teamcard.component";
import { SpkCostcardComponent } from '../../../@spk/reusable-widgets/spk-costcard/spk-costcard.component';
import { SpkReusableTablesComponent } from "../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";
import { SpkTaskcardComponent } from "../../../@spk/reusable-widgets/spk-taskcard/spk-taskcard.component";
import { SpkProjectsWidgetsComponent } from "../../../@spk/reusable-widgets/spk-projects-widgets/spk-projects-widgets.component";
import { SpkOngoingProjectsComponent } from '../../../@spk/reusable-widgets/spk-ongoing-projects/spk-ongoing-projects.component';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [SharedModule, SpkProgresscardsComponent, SpkInfocardComponent, SpkMetriccardComponent, SpkUsercardComponent, SpkSummarycardComponent, SpkTeamcardComponent, SpkCostcardComponent,
    SpkConvertioncardComponent, SpkReusableTablesComponent, SpkTaskcardComponent, SpkProjectsWidgetsComponent,SpkOngoingProjectsComponent],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {
  metricCards = [
    {
      title: 'Number Of Sales',
      value: '568',
      icon1Class: 'bi bi-caret-down-fill me-1 text-danger fs-11',
      icon1Value: '0.5%',
      icon2Class: 'bi bi-caret-up-fill fs-11 me-1 text-success',
      icon2Value: '0.7%',
      progressValue: 70,
      progressBarClass: 'wd-70p',
      label1: 'Target',
      label2: 'Last Month'
    },
    {
      title: 'New Revenue',
      value: '$12,897',
      icon1Class: 'bi bi-caret-up-fill me-1 text-success fs-11',
      icon1Value: '0.72%',
      icon2Class: 'bi bi-caret-down-fill me-1 text-danger fs-11',
      icon2Value: '0.43%',
      progressValue: 60,
      progressBarClass: 'wd-60p bg-secondary',
      label1: 'Target',
      label2: 'Last Month'
    },
    {
      title: 'Total Cost',
      value: '$11,234',
      icon1Class: 'bi bi-caret-down-fill me-1 text-danger fs-11',
      icon1Value: '1.4%',
      icon2Class: 'bi bi-caret-down-fill me-1 text-danger fs-11',
      icon2Value: '1.44%',
      progressValue: 50,
      progressBarClass: 'wd-50p bg-success',
      label1: 'Target',
      label2: 'Last Month'
    },
    {
      title: 'Profit By Sale',
      value: '$789',
      icon1Class: 'bi bi-caret-down-fill me-1 text-danger fs-11',
      icon1Value: '0.4%',
      icon2Class: 'bi bi-caret-up-fill me-1 text-success fs-11',
      icon2Value: '0.9%',
      progressValue: 40,
      progressBarClass: 'wd-40p bg-info',
      label1: 'Target',
      label2: 'Last Month'
    }
  ];
  infoCards = [
    {
      iconClass: 'fe fe-user',
      bgClass: 'bg-primary-transparent',
      textClass: 'text-primary',
      title: 'Total Users',
      value: '34,789',
    },
    {
      iconClass: 'fe fe-trending-up',
      bgClass: 'bg-secondary-transparent',
      textClass: 'text-secondary',
      title: 'Total Sales',
      value: '98,674',
    },
    {
      iconClass: 'fe fe-dollar-sign',
      bgClass: 'bg-info-transparent',
      textClass: 'text-info',
      title: 'Total Profits',
      value: '$45,078',
    },
    {
      iconClass: 'fe fe-shopping-cart',
      bgClass: 'bg-success-transparent',
      textClass: 'text-success',
      title: 'Total Orders',
      value: '35,897',
    }
  ];
  hasBorder: boolean = true;
  metricCards1 = [
    {
      title: 'Gross Profit Margin',
      value: 77,
      changeValue: -1.68,
      changeClass: 'text-danger',
      iconClass: 'fe fe-arrow-down',
      hasBorder: true
    },
    {
      title: 'Opex Ratio',
      value: 60,
      changeValue: 0.27,
      changeClass: 'text-success',
      iconClass: 'fe fe-arrow-up',
      hasBorder: true
    },
    {
      title: 'Operating Profit Margin',
      value: 57,
      changeValue: -0.87,
      changeClass: 'text-danger',
      iconClass: 'fe fe-arrow-down',
      hasBorder: true
    },
    {
      title: 'Net Profit Margin',
      value: 35,
      changeValue: 22,
      changeClass: 'text-success',
      iconClass: 'fe fe-arrow-up',
      hasBorder: false
    }
  ];
  users = [
    {
      imageSrc: './assets/images/faces/5.jpg',
      name: 'Reynante',
      role: 'Web Developer',
      status: 'Verified'
    },
    {
      imageSrc: './assets/images/faces/4.jpg',
      name: 'Joyce Chua',
      role: 'Team Leader',
      status: 'Verified'
    },
    {
      imageSrc: './assets/images/faces/6.jpg',
      name: 'Owen Bongcaras',
      role: 'Web Designer',
      status: 'Verified'
    },
    {
      imageSrc: './assets/images/faces/7.jpg',
      name: 'Mariane Galeon',
      role: 'PHP Developer',
      status: 'Verified'
    }
  ];
  conversionCards = [
    {
      title: 'Click Through Conversions',
      value: '14,678',
      percentage: '1.5%',
      badgeClass: 'bg-success',
      description: 'The number of clicks to the ad that consist of a single impression.'
    },
    {
      title: 'View Through Conversions',
      value: '2,971',
      percentage: '0.55%',
      badgeClass: 'bg-danger',
      description: 'Estimated daily unique views through conversions per visitor on the ads.'
    },
    {
      title: 'Total Conversions',
      value: '1,896',
      percentage: '1.8%',
      badgeClass: 'bg-success',
      description: 'Estimated total conversions on ads per impressions to the ads.'
    }
  ];
  summaryCards = [
    {
      title: 'New Users',
      iconClass: 'mdi mdi-account-multiple icon-size float-start text-primary',
      value: '3,672',
      subtitle: 'Monthly users',
      extraValue: '50%',
      customCard:'order'
    },
    {
      title: 'Total Tax',
      iconClass: 'mdi mdi-cube',
      value: '$89,265',
      subtitle: 'Monthly Income',
      extraValue: '$7,893',
      customCard:'widget'
    },
    {
      title: 'Total Profit',
      iconClass: 'mdi mdi-poll-box',
      value: '$23,987',
      subtitle: 'Monthly Profit',
      extraValue: '$4,678',
      customCard:'widget'
    },
    {
      title: 'Total Sales',
      iconClass: 'mdi mdi-cart',
      value: '46,486',
      subtitle: 'Monthly Sales',
      extraValue: '3,756',
      customCard:'widget'
    }
  ];
  teamMembers = [
    {
      imageSrc: './assets/images/faces/5.jpg',
      name: 'Mariane Galeon',
      role: 'Web Developer',
      stars: [true, true, true, true, false],
      socialLinks: [
        { iconClass: 'fab fa-facebook-f' },
        { iconClass: 'fab fa-x-twitter' },
        { iconClass: 'fab fa-google' },
        { iconClass: 'fab fa-dribbble' }
      ]
    },
    {
      imageSrc: './assets/images/faces/6.jpg',
      name: 'Joyce Chua',
      role: 'App Developer',
      stars: [true, true, true, true, false],
      socialLinks: [
        { iconClass: 'fab fa-facebook-f' },
        { iconClass: 'fab fa-x-twitter' },
        { iconClass: 'fab fa-google' },
        { iconClass: 'fab fa-dribbble' }
      ]
    }
  ];
  costCards = [
    {
      title: 'Total Cost Reduction',
      value: '$23,567',
      trendValue: '23%',
      trendColor: 'success',
      iconClass: 'fa-arrow-up',
      progressColor: 'info',
      progressWidth: 50,
      hasBorder: true
    },
    {
      title: 'Total Cost Savings',
      value: '15.2%',
      trendValue: '12%',
      trendColor: 'danger',
      iconClass: 'fa-arrow-down',
      progressColor: 'danger',
      progressWidth: 70,
      hasBorder: false
    }
  ];
  visitors = [
    {
      image: './assets/images/faces/2.jpg',
      name: 'Socrates Itumay',
      role: 'Web Developer',
      buttonClass: 'btn-primary',
      buttonText: 'Follow'
    },
    {
      image: './assets/images/faces/3.jpg',
      name: 'Reynante Labares',
      role: 'CEO',
      buttonClass: 'btn-secondary',
      buttonText: 'Follow'
    },
    {
      image: './assets/images/faces/4.jpg',
      name: 'Owen Bongcaras',
      role: 'Manager',
      buttonClass: 'btn-danger',
      buttonText: 'Follow'
    },
    {
      image: './assets/images/faces/5.jpg',
      name: 'Mariane Galeon',
      role: 'Administrator',
      buttonClass: 'btn-info',
      buttonText: 'Follow'
    },
    {
      image: './assets/images/faces/6.jpg',
      name: 'Steven Watson',
      role: 'Founder',
      buttonClass: 'btn-success',
      buttonText: 'Follow'
    },
    {
      image: './assets/images/faces/2.jpg',
      name: 'Wilson Rose',
      role: 'Auditor',
      buttonClass: 'btn-success',
      buttonText: 'Follow'
    },
    {
      image: './assets/images/faces/7.jpg',
      name: 'Sonia Fraser',
      role: 'App Developer',
      buttonClass: 'btn-warning',
      buttonText: 'Follow'
    }
  ];
  taskCardData = {
    avatar: './assets/images/faces/8.jpg',
    userName: 'Joyce Chua',
    userRole: 'UX Designer',
    tasks: [
      {
        iconClass: 'primary',
        title: 'Task Finished',
        date: '29 Oct 2020',
        description: 'Adam Berry finished task on',
        link: 'Project Management'
      },
      {
        iconClass: 'secondary',
        title: 'New Comment',
        date: '25 Oct 2020',
        description: 'Victoria commented on Project',
        link: 'AngularJS Template'
      },
      {
        iconClass: 'secondary',
        title: 'Project Completed',
        date: '22 Aug 2020',
        description: 'Victoria commented on Project',
        link: 'AngularJS Template'
      },
      {
        iconClass: 'secondary',
        title: 'New Request',
        date: '24 Oct 2022',
        description: 'Victoria commented on Project',
        link: 'AngularJS Template'
      },
      {
        iconClass: 'danger',
        title: 'Task Overdue',
        date: '14 Oct 2020',
        description: 'Petey Cruiser finished task',
        link: 'Integrated management'
      }
    ]
  };
  projectData = [
    { name: 'HTML Project', status: 35, barClass: 'bg-primary' },
    { name: 'Wordpress Project', status: 50, barClass: 'bg-secondary' },
    { name: 'Angular Project', status: 40, barClass: 'bg-info' },
    { name: 'React Project', status: 10, barClass: 'bg-danger' }
  ];
  ongoingProjects = [
    {
      name: 'PSD Projects',
      statusIcon: 'fa-caret-down',
      statusColor: 'danger',
      timeAgo: '5 days ago',
      startDate: '17-02-2020',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...'
    },
    {
      name: 'Wordpress Projects',
      statusIcon: 'fa-caret-up',
      statusColor: 'success',
      timeAgo: '2 days ago',
      startDate: '15-02-2020',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit..'
    },
    {
      name: 'HTML & CSS3 Projects',
      statusIcon: 'fa-caret-down',
      statusColor: 'danger',
      timeAgo: '1 days ago',
      startDate: '26-02-2020',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit..'
    },
    {
      name: 'Excel Projects',
      statusIcon: 'fa-caret-up',
      statusColor: 'success',
      timeAgo: '2 days ago',
      startDate: '15-02-2020',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit..'
    }
  ];
}
