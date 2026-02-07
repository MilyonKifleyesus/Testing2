import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { RouterModule } from '@angular/router';
import { SpkNgSelectComponent } from '../../../@spk/reusable-plugins/spk-ng-select/spk-ng-select.component';
import { SpkProfileComponent } from '../../../@spk/reusable-pages/spk-profile/spk-profile.component';
import { SpkGalleryComponent } from '../../../@spk/reusable-plugins/spk-gallery/spk-gallery.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule,NgbModule,NgSelectModule,GalleryModule,LightboxModule,RouterModule,SpkNgSelectComponent,SpkProfileComponent,SpkGalleryComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class ProfileComponent {
  timeZone = [
    { value: 1, label: '(GMT-11:00) Midway Island, Samoa' },
    { value: 2, label: '(GMT-10:00) Hawaii-Aleutian' },
    { value: 3, label: '(GMT-10:00) Hawaii' },
    { value: 4, label: '(GMT-09:30) Marquesas Islands' },
    { value: 5, label: '(GMT-09:00) Gambier Islands' },
    { value: 6, label: '(GMT-09:00) Alaska' },
    { value: 7, label: '(GMT-08:00) Tijuana, Baja California' },
    { value: 8, label: '(GMT-08:00) Pitcairn Islands' },
    { value: 9, label: '(GMT-08:00) Pacific Time (US &amp; Canada)' },
    { value: 10, label: '(GMT-07:00) Mountain Time (US &amp; Canada)' },
    { value: 11, label: '(GMT-07:00) Chihuahua, La Paz, Mazatlan' },
    { value: 12, label: '(GMT-07:00) Arizona' },
    { value: 13, label: '(GMT-06:00) Saskatchewan, Central America' },
    { value: 14, label: '(GMT-06:00) Guadalajara, Mexico City, Monterrey' },
    { value: 15, label: '(GMT-06:00) Easter Island' },
    { value: 16, label: '(GMT-06:00) Central Time (US &amp; Canada)' },
    { value: 17, label: '(GMT-05:00) Eastern Time (US &amp; Canada)' },
    { value: 18, label: '(GMT-05:00) Cuba' },
    { value: 19, label: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco' },
    { value: 20, label: '(GMT-04:30) Caracas' },
    { value: 21, label: '(GMT-04:00) Santiago' },
    { value: 22, label: '(GMT-04:00) La Paz' },
    { value: 23, label: '(GMT-04:00) Faukland Islands' },
    { value: 24, label: '(GMT-04:00) Brazil' },
    { value: 25, label: '(GMT-04:00) Atlantic Time (Goose Bay)' },
    { value: 26, label: '(GMT-04:00) Atlantic Time (Canada)' },
    { value: 27, label: '(GMT-03:30) Newfoundland' },
    { value: 28, label: '(GMT-03:00) UTC-3' },
    { value: 29, label: '(GMT-03:00) Montevideo' },
    { value: 30, label: '(GMT-03:00) Miquelon, St. Pierre' },
    { value: 31, label: '(GMT-03:00) Greenland' },
    { value: 32, label: '(GMT-03:00) Buenos Aires' },
    { value: 33, label: '(GMT-03:00) Brasilia' },
    { value: 34, label: '(GMT-02:00) Mid-Atlantic' },
    { value: 35, label: '(GMT-01:00) Cape Verde Is' },
    { value: 36, label: '(GMT-01:00) Azores' },
    { value: 37, label: '(GMT) Greenwich Mean Time : Belfast' },
    { value: 38, label: '(GMT) Greenwich Mean Time : Dublin' },
    { value: 39, label: '(GMT) Greenwich Mean Time : Lisbon' },
    { value: 40, label: '(GMT) Greenwich Mean Time : London' },
    { value: 41, label: '(GMT) Monrovia, Reykjavik' },
    { value: 42, label: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna' },
    { value: 43, label: '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana,Prague' },
    { value: 44, label: '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris' },
    { value: 45, label: '(GMT+01:00) West Central Africa' },
    { value: 46, label: '(GMT+01:00) Windhoek' },
    { value: 47, label: '(GMT+02:00) Beirut' },
    { value: 48, label: '(GMT+02:00) Cairo' },
    { value: 49, label: '(GMT+02:00) Gaza' },
    { value: 50, label: '(GMT+02:00) Harare, Pretoria' },
    { value: 51, label: '(GMT+02:00) Jerusalem' },
    { value: 52, label: '(GMT+02:00) Minsk' },
    { value: 53, label: '(GMT+02:00) Syria' },
    { value: 54, label: '(GMT+03:00) Moscow, St. Petersburg, Volgograd' },
    { value: 55, label: '(GMT+03:00) Nairobi' },
    { value: 56, label: '(GMT+03:30) Tehran' },
    { value: 57, label: '(GMT+04:00) Abu Dhabi, Muscat' },
    { value: 58, label: '(GMT+04:00) Yerevan' },
    { value: 59, label: '(GMT+04:30) Kabul' },
    { value: 60, label: '(GMT+05:00) Ekaterinburg' },
    { value: 61, label: '(GMT+05:00) Tashkent' },
    { value: 62, label: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi' },
    { value: 63, label: '(GMT+05:45) Kathmandu' },
    { value: 64, label: '(GMT+06:00) Astana, Dhaka' },
    { value: 65, label: '(GMT+06:00) Novosibirsk' },
    { value: 66, label: '(GMT+06:30) Yangon (Rangoon)' },
    { value: 67, label: '(GMT+07:00) Bangkok, Hanoi, Jakarta' },
    { value: 68, label: '(GMT+07:00) Krasnoyarsk' },
    { value: 69, label: '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi' },
    { value: 70, label: '(GMT+08:00) Irkutsk, Ulaan Bataar' },
    { value: 71, label: '(GMT+08:00) Perth' },
    { value: 72, label: '(GMT+08:45) Eucla' },
    { value: 73, label: '(GMT+09:00) Osaka, Sapporo, Tokyo' },
    { value: 74, label: '(GMT+09:00) Seoul' },
    { value: 75, label: '(GMT+09:00) Yakutsk' },
    { value: 76, label: '(GMT+09:30) Adelaide' },
    { value: 77, label: '(GMT+09:30) Darwin' },
    { value: 78, label: '(GMT+10:00) Brisbane' },
    { value: 79, label: '(GMT+10:00) Hobart' },
    { value: 80, label: '(GMT+10:00) Vladivostok' },
    { value: 81, label: '(GMT+10:30) Lord Howe Island' },
    { value: 82, label: '(GMT+11:00) Solomon Is., New Caledonia' },
    { value: 83, label: '(GMT+11:00) Magadan' },
    { value: 84, label: '(GMT+11:30) Norfolk Island' },
    { value: 85, label: ' (GMT+12:00) Anadyr, Kamchatka' },
    { value: 86, label: '(GMT+12:00) Auckland, Wellington' },
    { value: 87, label: '(GMT+12:00) Fiji, Kamchatka, Marshall Is' },
    { value: 88, label: '(GMT+12:45) Chatham Islands' },
    { value: 89, label: "(GMT+13:00) Nuku'alofa" },
    { value: 90, label: '(GMT+14:00) Kiritimati' },
]
  active!:1;
languages=[
  {value:1,label:'Us English'},
  {value:2,label:'Arabic'},
  {value:3,label:'Korean'},
]
handleSelectChange(value: any | any[]) {
}
  constructor(public gallery: Gallery) {}
  users = [
    {
      avatar: './assets/images/faces/2.jpg',
      name: 'Socrates Itumay',
      title: 'Project Manager',
      description: 'Lorem Ipsum is not simply popular belief Contrary.',
    },
    {
      avatar: './assets/images/faces/3.jpg',
      name: 'Reynante Labares',
      title: 'Web Designer',
      description: 'Lorem Ipsum is not simply popular belief Contrary.',
    },
    {
      avatar: './assets/images/faces/4.jpg',
      name: 'Owen Bongcaras',
      title: 'App Developer',
      description: 'Lorem Ipsum is not simply popular belief Contrary.',
    },
    {
      avatar: './assets/images/faces/8.jpg',
      name: 'Stephen Metcalfe',
      title: 'Administrator',
      description: 'Lorem Ipsum is not simply popular belief Contrary.',
    },
    {
      avatar: './assets/images/faces/2.jpg',
      name: 'Socrates Itumay',
      title: 'Project Manager',
      description: 'Lorem Ipsum is not simply popular belief Contrary.',
    },
    {
      avatar: './assets/images/faces/3.jpg',
      name: 'Reynante Labares',
      title: 'Web Designer',
      description: 'Lorem Ipsum is not simply popular belief Contrary.',
    },
    {
      avatar: './assets/images/faces/4.jpg',
      name: 'Owen Bongcaras',
      title: 'App Developer',
      description: 'Lorem Ipsum is not simply popular belief Contrary.',
    },
    {
      avatar: './assets/images/faces/8.jpg',
      name: 'Stephen Metcalfe',
      title: 'Administrator',
      description: 'Lorem Ipsum is not simply popular belief Contrary.',
    },
  ];
  imageData=[
    {
      srcUrl: "./assets/images/media/media-4.jpg",colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
      lightboxClass:'',imageClass:''
    },
    {
      srcUrl: "./assets/images/media/media-5.jpg", lightboxClass:'',imageClass:'',colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    },
    {
      srcUrl: "./assets/images/media/media-8.jpg", lightboxClass:'',imageClass:'',colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    },
    {
      srcUrl: "./assets/images/media/media-9.jpg", lightboxClass:'',imageClass:'',colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    },
    {
      srcUrl: './assets/images/media/media-12.jpg', lightboxClass:'',imageClass:'',colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    },
    {
      srcUrl: './assets/images/media/media-15.jpg', lightboxClass:'',imageClass:'',colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    },
    {
      srcUrl: './assets/images/media/media-17.jpg', lightboxClass:'',imageClass:'',colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    },
    {
      srcUrl: './assets/images/media/media-5.jpg', lightboxClass:'',imageClass:'',colClass:'col-lg-3 col-md-3 col-sm-6 col-12',
    },
  ]
}

