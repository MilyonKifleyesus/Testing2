import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filemanager-list',
  standalone: true,
  imports: [SharedModule,RouterModule,CommonModule],
  templateUrl: './filemanager-list.component.html',
  styleUrl: './filemanager-list.component.scss'
})
export class FilemanagerListComponent {
  fileManagerItems = [
    { type: 'videos', size: '4.23gb', image: './assets/images/files/png/4.png', link: '/apps/filemanager/file-details' },
    { type: 'images', size: '4.23gb', image: './assets/images/files/png/4.png', link: '/apps/filemanager/file-details' },
    { type: 'Documents', size: '4.23gb', image: './assets/images/files/png/6.png', link: '/apps/filemanager/file-details' },
    { type: 'Documents', size: '4.23gb', image: './assets/images/files/png/6.png', link: '/apps/filemanager/file-details' },
    { type: 'Documents', size: '4.23gb', image: './assets/images/files/png/6.png', link: '/apps/filemanager/file-details' },
    { type: 'Documents', size: '4.23gb', image: './assets/images/files/png/1.png', link: '/apps/filemanager/file-details' },
    { type: 'Documents', size: '4.23gb', image: './assets/images/files/png/1.png', link: '/apps/filemanager/file-details' },
    { type: 'Documents', size: '4.23gb', image: './assets/images/files/png/1.png', link: '/apps/filemanager/file-details' },
    { type: 'Documentsdeos', size: '4.23gb', image: './assets/images/files/png/2.png', link: '/apps/filemanager/file-details' },
    { type: 'Documentsdeos', size: '4.23gb', image: './assets/images/files/png/2.png', link: '/apps/filemanager/file-details' },
    { type: 'Documents', size: '4.23gb', image: './assets/images/files/png/3.png', link: '/apps/filemanager/file-details' },
    { type: 'Documents', size: '4.23gb', image: './assets/images/files/png/3.png', link: '/apps/filemanager/file-details' },
    { type: '221.jpg', size: '120 KB', image: './assets/images/files/jpg/1.jpg', link: '/apps/filemanager/file-details', isImage: true },
    { type: '567.jpg', size: '120 KB', image: './assets/images/files/jpg/2.jpg', link: '/apps/filemanager/file-details', isImage: true },
    { type: '367.jpg', size: '120 KB', image: './assets/images/files/jpg/3.jpg', link: '/apps/filemanager/file-details', isImage: true },
    { type: '211.jpg', size: '120 KB', image: './assets/images/files/jpg/4.jpg', link: '/apps/filemanager/file-details', isImage: true },
    { type: '567.jpg', size: '120 KB', image: './assets/images/files/jpg/5.jpg', link: '/apps/filemanager/file-details', isImage: true },
    { type: '345.jpg', size: '120 KB', image: './assets/images/files/jpg/6.jpg', link: '/apps/filemanager/file-details', isImage: true },
    { type: '213.jpg', size: '120 KB', image: './assets/images/files/jpg/7.jpg', link: '/apps/filemanager/file-details', isImage: true },
    { type: '1324.jpg', size: '120 KB', image: './assets/images/files/jpg/8.jpg', link: '/apps/filemanager/file-details', isImage: true },
    { type: '123.jpg', size: '120 KB', image: './assets/images/files/jpg/9.jpg', link: '/apps/filemanager/file-details', isImage: true },
  ];
}
