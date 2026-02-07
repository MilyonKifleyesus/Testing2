import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Gallery, GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SpkGalleryComponent } from '../../../@spk/reusable-plugins/spk-gallery/spk-gallery.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SharedModule,GalleryModule,LightboxModule,SpkGalleryComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  active!:1;
  items!: GalleryItem[];

  imageData = data;


  constructor(public gallery: Gallery) {}

  ngOnInit() {
    // Creat gallery items
    this.items = this.imageData.map((item) => {
      return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
    });
    
  }

}
const data=[
  
    {
      srcUrl: "./assets/images/media/media-40.jpg",
      previewUrl: "./assets/images/media/media-40.jpg",
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: "./assets/images/media/media-41.jpg",
      previewUrl: "./assets/images/media/media-41.jpg",
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: "./assets/images/media/media-42.jpg",
      previewUrl: "./assets/images/media/media-42.jpg",
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: "./assets/images/media/media-43.jpg",
      previewUrl: "./assets/images/media/media-43.jpg",
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-44.jpg',
      previewUrl: './assets/images/media/media-44.jpg',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-45.jpg',
      previewUrl: './assets/images/media/media-45.jpg',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-46.jpg',
      previewUrl: './assets/images/media/media-46.jpg',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },
    {
      srcUrl: './assets/images/media/media-60.jpg',
      previewUrl: './assets/images/media/media-60.jpg',
      colClass:'col-lg-3 col-md-3 col-sm-6 col-12'
    },

]
