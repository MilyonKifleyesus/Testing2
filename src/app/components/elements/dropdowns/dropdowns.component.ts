import { Component } from '@angular/core';
import { NgbDropdownConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/prismData/dropdown';
import * as reuseCode from '../../../shared/prismData/dropdown';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent,SpkDropdownsComponent],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss'
})
export class DropdownsComponent {

  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    // config.placement = 'top-start';
    config.autoClose = true;
  }
  prsimCodeData: any = PrismCode;
  reusableCode: any = reuseCode;
  dropdownItems = [
    { item: 'Action 1' },
    { item: 'Another action' },
    { item: 'Something else here' }
  ]
  buttonGroups = [
    {
      label: 'Action',
      style: 'btn-outline-primary dropdown-toggle',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-secondary dropdown-toggle',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-success',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-info',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-warning',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-danger',
      items: ['Action', 'Another action', 'Something else here']
    }
  ];
  singledropdownGroups = [
    {
      label: 'Action',
      style: 'btn-primary dropdown-toggle',
      items: ['Action', 'Another action', 'Something else here']
    },
   
    {
      label: 'Action',
      style: 'btn-secondary dropdown-toggle',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-success',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-info',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-warning',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-danger',
      items: ['Action', 'Another action', 'Something else here']
    }
  ];
  roundedGroups = [
    {
      label: 'Action',
      style: 'btn-primary dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-secondary dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-success dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-info dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-warning dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-danger dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    }
  ];
  roundedOutlineGroups = [
    {
      label: 'Action',
      style: 'btn-outline-primary dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-secondary dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-success dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-info dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-warning dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'Action',
      style: 'btn-outline-danger dropdown-toggle rounded-pill',
      items: ['Action', 'Another action', 'Something else here']
    }
  ];
  splitButtons = [
    { style: 'btn-primary dropdown-toggle dropdown-toggle-split me-2', splitbuttonClass: 'btn btn-primary' },
    { style: 'btn-secondary dropdown-toggle dropdown-toggle-split me-2', splitbuttonClass: 'btn btn-secondary' },
    { style: 'btn-info dropdown-toggle dropdown-toggle-split me-2', splitbuttonClass: 'btn btn-info' },
    { style: 'btn-success dropdown-toggle dropdown-toggle-split me-2', splitbuttonClass: 'btn btn-success' },
    { style: 'btn-warning dropdown-toggle dropdown-toggle-split me-2', splitbuttonClass: 'btn btn-warning' },
    { style: 'btn-danger dropdown-toggle dropdown-toggle-split me-2', splitbuttonClass: 'btn btn-danger' },
  ];
  dropdownsizing = [
    { style: 'btn-primary btn-lg dropdown-toggle', splitbuttonClass: 'btn btn-primary', splitbutton: false, label: 'Large button' },
    { style: ' btn-lg btn-light dropdown-toggle dropdown-toggle-split', splitbuttonClass: 'btn btn-light btn-lg', splitbutton: true, splitTitle: 'Large Split button' },
    { style: 'btn-primary btn-sm dropdown-toggle ', splitbuttonClass: 'btn btn-primary2', splitbutton: false, label: 'Small button' },
    { style: 'btn-sm btn-light dropdown-toggle dropdown-toggle-split ', splitbuttonClass: 'btn btn-light btn-sm', splitbutton: true, splitTitle: 'Small Split button' },
  ];
  autoCloseGroups = [
    { style: 'btn-primary btn-border-endropdown-toggle', label: 'Default dropdown', closeAuto: true },
    { style: 'btn-secondary btn-border-endropdown-toggle', label: 'Clickable outside', closeAuto: false },
    { style: 'btn-success btn-border-endropdown-toggle', label: 'Clickable inside', closeAuto: true },
    { style: 'btn-warning btn-border-endropdown-toggle', label: 'Manual Close', closeAuto: true },
  ]
  droups = [
    {  style: 'btn-primary dropdown-toggle', label: 'Dropup', splitbutton: false, },
    {  style: 'btn-info dropdown-toggle dropdown-toggle-split', splitTitle: 'Split dropup', splitbutton: true, splitbuttonClass: 'btn btn-info' },
  ]
  dropright = [
    { Customclass: 'btn-group dropend my-1 me-2', style: 'btn-primary dropdown-toggle', label: 'Dropright', splitbutton: false, },
    { Customclass: 'btn-group dropend my-1', style: 'btn-info dropdown-toggle dropdown-toggle-split', splitTitle: 'Split dropend', splitbutton: true, splitbuttonClass: 'btn btn-info' },
  ]
  dropleft = [
    { Customclass: 'btn-group dropstart my-1 me-2', style: 'btn-primary dropdown-toggle', label: 'Dropleft', splitbutton: false, },
  ]
  alignmentOptions = [
    { Customclass: "btn-group", style: 'btn-primary  dropdown-toggle', label: 'Dropdown', menuClass: 'dropdown-menu' },
    { Customclass: "btn-group", style: 'btn-secondary dropdown-toggle', label: 'Right-aligned menu', menuClass: 'dropdown-menu' },
    { Customclass: "btn-group", style: 'btn-info    dropdown-toggle', label: 'Left-aligned, right-aligned lg', menuClass: 'dropdown-menu dropdown-menu-lg-end' },
    { Customclass: "btn-group", style: 'btn-warning dropdown-toggle', label: 'Right-aligned, left-aligned lg', menuClass: 'dropdown-menu-end dropdown-menu-lg-start' },
    { Customclass: "btn-group dropend", style: 'btn-success dropdown-toggle', label: 'Dropstart', menuClass: 'dropdown-menu' },
    { Customclass: "btn-group dropend", style: 'btn-danger dropdown-toggle', label: 'Dropend', menuClass: 'dropdown-menu' },
    { Customclass: "btn-group dropup my-1 me-2", style: 'btn-teal dropdown-toggle', label: 'Dropup', menuClass: 'dropdown-menu', placement: "top-start" },
  ]
  customDropdowns = [
    {
      label: 'Primary',
      style: 'btn-primary dropdown-toggle',
      menuClass: 'dropdown-menu dropdown-menu-primary', activeTitle: false,
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'secondary',
      menuClass: 'dropdown-menu dropdown-menu-secondary',
      style: 'btn-secondary dropdown-toggle', activeTitle: false,
      items: ['Action', 'Another action', 'Something else here']
    },
   
    {
      label: 'info',
      style: 'btn-info dropdown-toggle',
      menuClass: 'dropdown-menu dropmenu-item-info', activeTitle: true,
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'success',
      style: 'btn-success dropdown-toggle',
      menuClass: 'dropdown-menu dropmenu-light-success', activeTitle: true,
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'danger',
      style: 'btn-danger',
      menuClass: 'dropdown-menu dropmenu-light-danger', activeTitle: true,
      items: ['Action', 'Another action', 'Something else here']
    },
    {
      label: 'warning',
      style: 'btn-warning dropdown-toggle',
      menuClass: 'dropdown-menu dropmenu-item-warning',
      activeTitle: true,
      items: ['Action', 'Another action', 'Something else here',],
    },
  ]
  ghostDropdowns = [
    { label: 'Primary', style: 'btn-primary-ghost dropdown-toggle"' },
    { label: 'secondary', style: 'btn-secondary-ghost dropdown-toggle' },
    { label: 'success', style: 'btn-success-ghost dropdown-toggle' },
    { label: 'info', style: 'btn-info-ghost dropdown-toggle' },
    { label: 'Warning', style: 'btn-warning-ghost dropdown-toggle' },
    { label: 'Danger', style: 'btn-danger-ghost dropdown-toggle' },
  ]
}
