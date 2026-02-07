import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-blog',
  imports: [RouterModule],
  templateUrl: './spk-blog.component.html',
  styleUrl: './spk-blog.component.scss'
})
export class SpkBlogComponent {
@Input() card:any;
}
