import { Component, Renderer2, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DROPZONE_CONFIG, DropzoneComponent, DropzoneConfigInterface,DropzoneDirective,DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*,application/pdf,.doc,.docx,.txt',
  createImageThumbnails: true
};
@Component({
  selector: 'app-filemanager',
  standalone: true,
  imports: [SharedModule,NgbModule,DropzoneModule,RouterModule],
  providers:[  {
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],
  templateUrl: './filemanager.component.html',
  styleUrl: './filemanager.component.scss'
})
export class FilemanagerComponent {


  Openmodal(basicModal: any) {
    this.modalService.open(basicModal);
  }
  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 100,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  
  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;
  constructor(private formBuilder: FormBuilder,private modalService: NgbModal, private renderer: Renderer2) {
  }
  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled1(): void {
    this.disabled = !this.disabled;
  }
  public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }
  }

  public onUploadInit(args: any): void {
  }

  public onUploadError(args: any): void {
  }

  public onUploadSuccess(args: any): void {
  }
  navItems= [
    { icon: 'fe fe-video', label: 'Video', size: '30 MB' },
    { icon: 'fe fe-image', label: 'Images', size: '21 MB' },
    { icon: 'fe fe-music', label: 'Music', size: '14 MB' },
    { icon: 'fe fe-download', label: 'Download', size: '8 MB' },
    { icon: 'fe fe-file-text', label: 'Docs', size: '16 MB' },
    { icon: 'fe fe-grid', label: 'More', size: '19 MB' }
  ];
  navItems1 = [
    { icon: 'fe fe-folder', label: 'Social', bgClass: 'bg-primary' },
    { icon: 'fe fe-folder', label: 'Promotions', bgClass: 'bg-info text-fixed-white' },
    { icon: 'fe fe-folder', label: 'Updates', bgClass: 'bg-success' },
    { icon: 'fe fe-folder', label: 'Settings', bgClass: 'bg-danger' },
    { icon: 'fe fe-folder', label: 'Google Drive', bgClass: 'bg-secondary' }
  ];
  files = [
    { icon: 'fe fe-image', title: 'Image', description: 'An image file', lastOpened: '32 mins ago' },
    { icon: 'fe fe-smartphone', title: 'APK', description: 'An APK file', lastOpened: '1 hr ago' },
    { icon: 'fe fe-video', title: 'Video', description: 'A video file', lastOpened: '28 mins ago' },
    { icon: 'fe fe-file-text', title: 'Documents', description: 'A document file', lastOpened: '1 hr ago' },
    { icon: 'fe fe-music', title: 'Music', description: 'A music file', lastOpened: '2 hrs ago' },
    { icon: 'fe fe-file-text', title: 'PDF', description: 'A PDF file', lastOpened: '1 hr ago' },
    { icon: 'fe fe-image', title: 'Image', description: 'An image file', lastOpened: '32 mins ago' },
    { icon: 'fe fe-smartphone', title: 'APK', description: 'An APK file', lastOpened: '1 hr ago' },
  ];
  files1 = [
    { id: '1', icon: 'fe fe-image', title: 'Videos', fileSize: '4.23gb', imageUrl: './assets/images/files/png/4.png', lastOpened: '32 mins ago' },
    { id: '2', icon: 'fe fe-file-text', title: 'document.pdf', fileSize: '23kb', imageUrl: './assets/images/files/png/6.png', lastOpened: '1 hr ago' },
    { id: '3', icon: 'fe fe-image', title: 'Images', fileSize: '23kb', imageUrl: './assets/images/files/png/5.png', lastOpened: '28 mins ago' },
    { id: '4', icon: 'fe fe-file-text', title: 'Images', fileSize: '1.23gb', imageUrl: './assets/images/files/png/4.png', lastOpened: '1 hr ago' },
    { id: '5', icon: 'fe fe-image', title: 'Images', fileSize: '23kb', imageUrl: './assets/images/files/png/5.png', lastOpened: '28 mins ago' },
    { id: '6', icon: 'fe fe-file-text', title: 'document.pdf', fileSize: '23kb', imageUrl: './assets/images/files/png/2.png', lastOpened: '1 hr ago' },
    { id: '7', icon: 'fe fe-image', title: 'Downloads', fileSize: '453kb', imageUrl: './assets/images/files/png/4.png', lastOpened: '32 mins ago' },
    { id: '8', icon: 'fe fe-file-text', title: 'Word Document', fileSize: '23kb', imageUrl: './assets/images/files/png/6.png', lastOpened: '1 hr ago' },


  ];
}
