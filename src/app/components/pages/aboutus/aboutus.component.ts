import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SpkAboutusComponent } from "../../../@spk/reusable-pages/spk-aboutus/spk-aboutus.component";

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [SharedModule, RouterModule, SpkAboutusComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  users = [
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'Dennis Trexy',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam !',
      socialLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'mdi mdi-facebook', buttonClass: 'bg-primary-transparent text-primary' },
        { platform: 'Google', url: 'https://myaccount.google.com/', iconClass: 'mdi mdi-google', buttonClass: 'bg-danger-transparent text-danger' },
        { platform: 'Twitter', url: 'https://twitter.com/', iconClass: 'ri ri-twitter-x-line', buttonClass: 'bg-info-transparent text-info' }
      ]
    },
    {
      avatar: './assets/images/faces/1.jpg',
      name: 'Benedict Vallone',
      title: 'Web Designer',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam !',
      socialLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'mdi mdi-facebook', buttonClass: 'bg-primary-transparent text-primary' },
        { platform: 'Google', url: 'https://myaccount.google.com/', iconClass: 'mdi mdi-google', buttonClass: 'bg-danger-transparent text-danger' },
        { platform: 'Twitter', url: 'https://twitter.com/', iconClass: 'ri ri-twitter-x-line', buttonClass: 'bg-info-transparent text-info' }
      ]
    },
    {
      avatar: './assets/images/faces/7.jpg',
      name: 'Robbie Ruder',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam !',
      socialLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'mdi mdi-facebook', buttonClass: 'bg-primary-transparent text-primary' },
        { platform: 'Google', url: 'https://myaccount.google.com/', iconClass: 'mdi mdi-google', buttonClass: 'bg-danger-transparent text-danger' },
        { platform: 'Twitter', url: 'https://twitter.com/', iconClass: 'ri ri-twitter-x-line', buttonClass: 'bg-info-transparent text-info' }
      ]
    },
    {
      avatar: './assets/images/faces/8.jpg',
      name: 'Mariane Galeon',
      title: 'Web Designer',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam !',
      socialLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'mdi mdi-facebook', buttonClass: 'bg-primary-transparent text-primary' },
        { platform: 'Google', url: 'https://myaccount.google.com/', iconClass: 'mdi mdi-google', buttonClass: 'bg-danger-transparent text-danger' },
        { platform: 'Twitter', url: 'https://twitter.com/', iconClass: 'ri ri-twitter-x-line', buttonClass: 'bg-info-transparent text-info' }
      ]
    }
  ];
}
