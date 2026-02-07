import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mail-compose',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './mail-compose.component.html',
  styleUrl: './mail-compose.component.scss'
})
export class MailComposeComponent {

}
