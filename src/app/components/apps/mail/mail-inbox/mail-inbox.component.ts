import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SpkReusableTablesComponent } from "../../../../@spk/reusable-tables/spk-reusable-tables/spk-reusable-tables.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mail-inbox',
  standalone: true,
  imports: [SharedModule, NgbModule, RouterModule, SpkReusableTablesComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './mail-inbox.component.html',
  styleUrl: './mail-inbox.component.scss'
})
export class MailInboxComponent {
  mainMenu = [
    { icon: 'fe fe-mail', label: 'Inbox', count: 20, isActive: true },
    { icon: 'fe fe-star', label: 'Starred', count: 3, isActive: false },
    { icon: 'fe fe-bookmark', label: 'Important', count: 10, isActive: false },
    { icon: 'fe fe-send', label: 'Sent Mail', count: 8, isActive: false },
    { icon: 'fe fe-edit', label: 'Drafts', count: 15, isActive: false },
    { icon: 'fe fe-disc', label: 'Spam', count: 128, isActive: false },
    { icon: 'fe fe-trash', label: 'Trash', count: 6, isActive: false }
  ];

  labels = [
    { icon: 'fe fe-folder', label: 'Social', count: 10 },
    { icon: 'fe fe-folder', label: 'Work', count: 22 },
    { icon: 'fe fe-folder', label: 'Personal', count: 22 },
    { icon: 'fe fe-folder', label: 'Promotions', count: 22 },
    { icon: 'fe fe-folder-plus', label: 'Updates', count: 17 }
  ];

  tags = [
    { icon: 'ri ri-twitter-x-line', label: 'Twitter', count: 2 },
    { icon: 'fe fe-github', label: 'Github', count: 32 },
    { icon: 'fe fe-gitlab', label: 'Gitlab', count: 23 }
  ];
  emails = [
    {
      isChecked: false,
      starClass: 'fa fa-star text-warning',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Tim Reid, S P N',
      subject: 'Boost Your Website Traffic',
      date: 'April 01',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star inbox-started',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Freelancer.com',
      subject: 'Stop wasting your visitors',
      date: 'May 23',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark text-danger',
      sender: 'PHPClass',
      subject: 'Added a new class: Login Class Fast Site',
      date: '9:27 AM',
      rowClass: 'unread'
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Facebook',
      subject: 'Somebody requested a new password',
      date: 'June 13',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star text-warning',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Skype',
      subject: 'Password successfully changed',
      date: 'March 24',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star inbox-started',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Google+',
      subject: 'alireza, do you know',
      date: 'March 09',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star inbox-started',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'WOW Slider',
      subject: 'New WOW Slider v7.8 - 67% off',
      date: 'March 14',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star inbox-started text-warning',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'LinkedIn Pulse',
      subject: 'The One Sign Your Co-Worker Will Stab',
      date: 'Feb 19',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Google Webmaster',
      subject: 'Improve the search presence of WebSite',
      date: 'March 15',
      rowClass: 'unread'
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'JW Player',
      subject: 'Last Chance: Upgrade to Pro for',
      date: 'March 15',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Drupal Community',
      subject: 'Welcome to the Drupal Community',
      date: 'March 04',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star inbox-started text-warning',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Zoosk',
      subject: '7 new singles we think you\'ll like',
      date: 'May 14',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark text-danger',
      sender: 'LinkedIn',
      subject: 'Alireza: Nokia Networks, System Group and',
      date: 'February 25',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Facebook',
      subject: 'Your account was recently logged into',
      date: 'March 14',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Twitter',
      subject: 'Your Twitter password has been changed',
      date: 'April 07',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'InternetSeer',
      subject: 'Performance Report',
      date: 'July 14',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark text-danger',
      sender: 'Bertina',
      subject: 'IMPORTANT: Don\'t lose your domains!',
      date: 'June 16',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star inbox-started',
      bookmarkClass: 'fa fa-bookmark text-danger',
      sender: 'Laura Gaffin, S P N',
      subject: 'Your Website On Google (Higher Rankings Are Better)',
      date: 'August 10',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Facebook',
      subject: 'Alireza Zare Login failed',
      date: 'February 14',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star inbox-started',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'AddMe.com',
      subject: 'Submit Your Website to the AddMe Business Directory',
      date: 'August 10',
      rowClass: ''
    },
    {
      isChecked: false,
      starClass: 'fa fa-star',
      bookmarkClass: 'fa fa-bookmark',
      sender: 'Terri Rexer, S P N',
      subject: 'Forget Google AdWords: Un-Limited Clicks for',
      date: 'April 14',
      rowClass: ''
    }
  ]
}
