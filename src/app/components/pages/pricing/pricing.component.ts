import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkPricingComponent } from '../../../@spk/reusable-pages/spk-pricing/spk-pricing.component';
import { SpkPricing1Component } from '../../../@spk/reusable-pages/spk-pricing1/spk-pricing1.component';
import { SpkPricing2Component } from '../../../@spk/reusable-pages/spk-pricing2/spk-pricing2.component';
import { SpkTabsPricingComponent } from '../../../@spk/reusable-pages/spk-tabs-pricing/spk-tabs-pricing.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [SharedModule,NgbModule,SpkPricingComponent,SpkPricing1Component,SpkPricing2Component,SpkTabsPricingComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
active=1;
pricingPlans = [
  {
    title: 'Free',
    subtitle: 'Lorem ipsum dolor',
    price: '0.00',
    bgClass: 'bg-primary',
    buttonClass: 'btn-primary',
    features: [
      { label: 'Free', detail: 'Ad posting' },
      { label: '0', detail: 'Featured Listings' },
      { label: '100%', detail: 'Secure' },
      { label: 'Custome', detail: 'Reviews' },
      { label: '24/7', detail: 'Support' },
    ],
  },
  {
    title: 'Premium',
    subtitle: 'Lorem ipsum dolor',
    price: '19',
    bgClass: 'bg-danger',
    buttonClass: 'btn-danger',
    features: [
      { label: 'Featured', detail: 'Ad posting' },
      { label: '20', detail: 'Featured Listings' },
      { label: '100%', detail: 'Secure' },
      { label: 'Custome', detail: 'Reviews' },
      { label: '24/7', detail: 'Support' },
    ],
  },
  {
    title: 'Silver',
    subtitle: 'Lorem ipsum dolor',
    price: '67',
    bgClass: 'bg-success',
    buttonClass: 'btn-success',
    features: [
      { label: 'Featured', detail: 'Ad posting' },
      { label: '30', detail: 'Featured Listings' },
      { label: '100%', detail: 'Secure' },
      { label: 'Custome', detail: 'Reviews' },
      { label: '24/7', detail: 'Support' },
    ],
  },
  {
    title: 'Gold',
    subtitle: 'Lorem ipsum dolor',
    price: '78',
    bgClass: 'bg-info',
    buttonClass: 'btn-info',
    features: [
      { label: 'Featured', detail: 'Ad posting' },
      { label: '40', detail: 'Featured Listings' },
      { label: '100%', detail: 'Secure' },
      { label: 'Custome', detail: 'Reviews' },
      { label: '24/7', detail: 'Support' },
    ],
  },
];
pricingPlans1 = [
  {
    title: 'Personal',
    price: 49,
    features: [
      '10 Free Domain Name',
      '15 One-Click Apps',
      '10 Databases',
      'Money Back Guarantee',
      '24/7 support'
    ],
    cardClass: 'card-pricing',
    isPrimary: false,
    isPremium: false
  },
  {
    title: 'Premium',
    price: 59,
    features: [
      '12 Free Domain Name',
      '20 One-Click Apps',
      '15 Databases',
      'Money Back Guarantee',
      '24/7 support'
    ],
    cardClass: 'card-pricing2',
    isPrimary: true,
    isPremium: true
  },
  {
    title: 'Corporate',
    price: 69,
    features: [
      '15 Free Domain Name',
      '25 One-Click Apps',
      '20 Databases',
      'Money Back Guarantee',
      '24/7 support'
    ],
    cardClass: 'card-pricing3',
    isPrimary: false,
    isPremium: false
  },
  {
    title: 'Business',
    price: 79,
    features: [
      '20 Free Domain Name',
      '30 One-Click Apps',
      '15 Databases',
      'Money Back Guarantee',
      '24/7 support'
    ],
    cardClass: 'card-pricing4',
    isPrimary: false,
    isPremium: false
  }
];
pricingPlans2 = [
  {
    title: 'Basic',
    price: 22,
    features: ['10GB Space', '3 Domain Names', '20 Email Address', 'No Live Support'],
    icon: 'fas fa-car',
    iconClass: 'text-primary price-1',
    iconBg: 'bg-primary-transparent',
    btnClass: 'primary',
    buttonText: 'Purchase Now'
  },
  {
    title: 'Standard',
    price: 55,
    features: ['10GB Space', '3 Domain Names', '20 Email Address', 'No Live Support'],
    icon: 'fas fa-plane',
    iconClass: 'text-secondary price-1',
    iconBg: 'bg-pink-transparent',
    btnClass: 'secondary',
    buttonText: 'Purchase Now'
  },
  {
    title: 'Premium',
    price: 99,
    features: ['Unlimited Space', '50 Domain Names', 'Unlimited Email Address', 'Live Support'],
    icon: 'fas fa-rocket',
    iconClass: 'text-info price-1',
    iconBg: 'bg-info-transparent',
    btnClass: 'info',
    buttonText: 'Purchase Now'
  }
];
pricingPlans3 = [
  {
    plan: 'Free',
    price: '$0',
    bgClass: 'bg-primary',
    buttonClass: 'btn-primary',
    features: [
      { iconClass: 'fe fe-check text-success', value: '2', label: 'FreeDomain Name' },
      { iconClass: 'fe fe-x text-danger', value: '0', label: 'One-Click Apps' },
      { iconClass: 'fe fe-x text-danger', value: '0', label: 'Databases' },
      { iconClass: 'fe fe-check text-success', value: 'Money', label: 'Back Guarantee' },
      { iconClass: 'fe fe-check text-success', value: '24/7', label: 'Support' }
    ]
  },
  {
    plan: 'Personal',
    price: '$99',
    bgClass: 'bg-secondary',
    buttonClass: 'btn-secondary',
    features: [
      { iconClass: 'fe fe-x text-danger', value: '2', label: 'FreeDomain Name' },
      { iconClass: 'fe fe-check text-success', value: '2', label: 'One-Click Apps' },
      { iconClass: 'fe fe-check text-success', value: '1', label: 'Databases' },
      { iconClass: 'fe fe-x text-danger', value: 'Money', label: 'Back Guarantee' },
      { iconClass: 'fe fe-check text-success', value: '24/7', label: 'Support' }
    ]
  },
  {
    plan: 'Premium',
    price: '$199',
    bgClass: 'bg-info text-fixed-white',
    buttonClass: 'btn-info',
    features: [
      { iconClass: 'fe fe-check text-success', value: '3', label: 'FreeDomain Name' },
      { iconClass: 'fe fe-x text-danger', value: '5', label: 'One-Click Apps' },
      { iconClass: 'fe fe-check text-success', value: '3', label: 'Databases' },
      { iconClass: 'fe fe-x text-danger', value: 'Money', label: 'Back Guarantee' },
      { iconClass: 'fe fe-check text-success', value: '24/7', label: 'Support' }
    ]
  },
  {
    plan: 'Enterprise',
    price: '$299',
    bgClass: 'bg-success',
    buttonClass: 'btn-success',
    features: [
      { iconClass: 'fe fe-check text-success', value: '10', label: 'FreeDomain Name' },
      { iconClass: 'fe fe-check text-success', value: '10', label: 'One-Click Apps' },
      { iconClass: 'fe fe-check text-success', value: '8', label: 'Databases' },
      { iconClass: 'fe fe-x text-danger', value: 'Money', label: 'Back Guarantee' },
      { iconClass: 'fe fe-check text-success', value: '24/7', label: 'Support' }
    ]
  }
];
pricingPlans4 = [
  {
    plan: 'Free',
    price: '$0',
    bgClass: 'bg-primary',
    buttonClass: 'btn-primary',
    features: [
      { iconClass: 'fe fe-check text-success', value: '2', label: 'FreeDomain Name' },
      { iconClass: 'fe fe-x text-danger', value: '0', label: 'One-Click Apps' },
      { iconClass: 'fe fe-x text-danger', value: '0', label: 'Databases' },
      { iconClass: 'fe fe-check text-success', value: 'Money', label: 'Back Guarantee' },
      { iconClass: 'fe fe-check text-success', value: '24/7', label: 'Support' }
    ]
  },
  {
    plan: 'Personal',
    price: '$15',
    bgClass: 'bg-secondary',
    buttonClass: 'btn-secondary',
    features: [
      { iconClass: 'fe fe-x text-danger', value: '2', label: 'FreeDomain Name' },
      { iconClass: 'fe fe-check text-success', value: '2', label: 'One-Click Apps' },
      { iconClass: 'fe fe-check text-success', value: '1', label: 'Databases' },
      { iconClass: 'fe fe-x text-danger', value: 'Money', label: 'Back Guarantee' },
      { iconClass: 'fe fe-check text-success', value: '24/7', label: 'Support' }
    ]
  },
  {
    plan: 'Premium',
    price: '$25',
    bgClass: 'bg-info text-fixed-white',
    buttonClass: 'btn-info',
    features: [
      { iconClass: 'fe fe-check text-success', value: '3', label: 'FreeDomain Name' },
      { iconClass: 'fe fe-x text-danger', value: '5', label: 'One-Click Apps' },
      { iconClass: 'fe fe-check text-success', value: '3', label: 'Databases' },
      { iconClass: 'fe fe-x text-danger', value: 'Money', label: 'Back Guarantee' },
      { iconClass: 'fe fe-check text-success', value: '24/7', label: 'Support' }
    ]
  },
  {
    plan: 'Enterprise',
    price: '$35',
    bgClass: 'bg-success',
    buttonClass: 'btn-success',
    features: [
      { iconClass: 'fe fe-check text-success', value: '10', label: 'FreeDomain Name' },
      { iconClass: 'fe fe-check text-success', value: '10', label: 'One-Click Apps' },
      { iconClass: 'fe fe-check text-success', value: '8', label: 'Databases' },
      { iconClass: 'fe fe-x text-danger', value: 'Money', label: 'Back Guarantee' },
      { iconClass: 'fe fe-check text-success', value: '24/7', label: 'Support' }
    ]
  }
];
}
