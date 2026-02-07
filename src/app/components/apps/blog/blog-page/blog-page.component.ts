import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SpkBlogComponent } from '../../../../@spk/reusable-apps/spk-blog/spk-blog.component';
import { SpkBlogcard1Component } from '../../../../@spk/reusable-apps/spk-blogcard1/spk-blogcard1.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [SharedModule,RouterModule,SpkBlogComponent,SpkBlogcard1Component],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
  blogCards = [
    {
      image: './assets/images/media/jobs-landing/blog/14.jpg',
      title: 'Excepteur occaecat cupidatat',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
      link: '/apps/blog/blog-details'
    },
    {
      image: './assets/images/media/jobs-landing/blog/11.jpg',
      title: 'Teri Dactyl Certain',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
      link: '/apps/blog/blog-details'
    },
    {
      image: './assets/images/media/jobs-landing/blog/12.jpg',
      title: 'Circumstances Certain claims',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
      link: '/apps/blog/blog-details'
    },
    {
      image: './assets/images/media/jobs-landing/blog/13.jpg',
      title: 'The standard chunk of Lorem',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
      link: '/apps/blog/blog-details'
    }
  ];
  cardData = [
    {
      image: './assets/images/media/jobs-landing/blog/8.jpg',
      title: 'Circumstances Certain claims',
      description: 'I of human happiness. sint occaecat ccaecat cupidatat non proident, sunt in culpa qui officia cupidatat non proident, sunt in culpa qui officia deserunt No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.',
      author: 'Abigail Johnson',
      authorImage: './assets/images/faces/2.jpg',
      date: '2 days ago',
      comments: 6,
      routerLink: '/apps/blog/blog-details'
    },
    {
      image: './assets/images/media/jobs-landing/blog/10.jpg',
      title: 'Teri Dactyl Certain',
      description: 'I of human happiness. sint occaecat ccaecat cupidatat non proident, sunt in culpa qui officia cupidatat non proident, sunt in culpa qui officia deserunt No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.',
      author: 'Christian Lerio',
      authorImage: './assets/images/faces/4.jpg',
      date: '3 days ago',
      comments: 5,
      routerLink: '/apps/blog/blog-details',
      imageClass:'op-8'
    },
    {
      image: './assets/images/media/jobs-landing/blog/9.jpg',
      title: 'Circumstances Certain claims',
      description: 'I of human happiness. sint occaecat ccaecat cupidatat non proident, sunt in culpa qui officia cupidatat non proident, sunt in culpa qui officia deserunt No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.',
      author: 'Christian Lerio',
      authorImage: './assets/images/faces/5.jpg',
      date: '3 days ago',
      comments: 2,
      routerLink: '/apps/blog/blog-details'
    }
  ];
}
