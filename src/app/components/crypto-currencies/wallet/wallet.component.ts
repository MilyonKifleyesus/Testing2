import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [SharedModule,NgbTooltipModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

}
