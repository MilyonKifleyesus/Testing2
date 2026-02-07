import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrDefaults } from 'angularx-flatpickr';
import flatpickr from 'flatpickr';
import { SpkFlatpickrComponent } from '../../../../@spk/reusable-plugins/spk-flatpickr/spk-flatpickr.component';

@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [SharedModule,SpkFlatpickrComponent],
  providers:[FlatpickrDefaults],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.scss'
})
export class DateTimePickerComponent {
  basicDemoValue = '2017-01-01';
  inlineDatePicker: Date = new Date();
  timePicker: Date | null = null;
  timePicker1: Date | null = null;
  timePicker2: Date | null = null;
  timePicker3: Date | null = null;
  timePicker4: Date | null = null;

  flatpickrOptions: any = {
    inline: true,
  };
  // flatpickrOptions: FlatpickrOptions;

  constructor() {}

  ngOnInit() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };

    flatpickr('#inlinetime', this.flatpickrOptions);

      this.flatpickrOptions = {
        enableTime: true,
        dateFormat: 'Y-m-d H:i', // Specify the format you want
        defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
      };

      flatpickr('#pretime', this.flatpickrOptions);
  }
}
