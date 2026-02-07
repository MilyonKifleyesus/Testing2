import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//Menu Bar
export interface Menu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  dirchange?: boolean;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
  selected?: boolean;
  menutype?:string;
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerwidth < 991) {
          this.collapseSidebar = false;
        }
      });
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = false;
      });
    }
    
    // Load menu based on stored user role on app initialization
    this.initializeMenuFromStorage();
  }

  private initializeMenuFromStorage(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user && user.role) {
          this.loadMenuByRole(user.role);
        }
      } catch (e) {
        console.error('Error parsing stored user', e);
      }
    }
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  ngOnDestroy() {
    this.unsubscriber.next(true);
    this.unsubscriber.complete();
  }

  // Super Admin Menu Items
  SUPERADMIN_MENUITEMS: Menu[] = [
    { headTitle: 'Super Admin Dashboard' },
    {
      path: '/admin/dashboard',
      title: 'Dashboard',
      icon: 'ti-dashboard',
      type: 'link',
      active: false,
    },
    {
      title: 'Project Management',
      type: 'sub',
      icon: 'ti-layout',
      active: false,
      children: [
        {
          path: '/admin/projects/list',
          title: 'List of Projects',
          type: 'link',
        },
        {
          path: '/admin/projects/new',
          title: 'New Project',
          type: 'link',
        }
      ]
    },
    {
      title: 'User Management',
      type: 'sub',
      icon: 'ti-user',
      active: false,
      children: [
        {
          path: '/admin/users/list',
          title: 'List of Users',
          type: 'link',
        },
        {
          path: '/admin/users/inspectors',
          title: 'Inspectors',
          type: 'link',
        }
      ]
    },
    {
      title: 'Configuration',
      type: 'sub',
      icon: 'ti-settings',
      active: false,
      children: [
        {
          path: '/admin/config/inspector-category',
          title: 'Inspector Category',
          type: 'link',
        },
        {
          path: '/admin/config/inspector-task',
          title: 'Inspector Task',
          type: 'link',
        },
        {
          path: '/admin/config/inspector-status',
          title: 'Inspector Status',
          type: 'link',
        },
        {
          path: '/admin/config/project-type',
          title: 'Project Type',
          type: 'link',
        },
        {
          path: '/admin/config/defect-type',
          title: 'Defect Type',
          type: 'link',
        },
        {
          path: '/admin/config/defect-location',
          title: 'Defect Location',
          type: 'link',
        },
        {
          path: '/admin/config/types-of-time',
          title: 'Types of Time',
          type: 'link',
        },
        {
          path: '/admin/config/category-inspection',
          title: 'Category Inspection',
          type: 'link',
        },
        {
          path: '/admin/config/location',
          title: 'Location',
          type: 'link',
        },
        {
          path: '/admin/config/languages',
          title: 'Languages',
          type: 'link',
        }
      ]
    },
    {
      path: '/admin/timesheet',
      title: 'Time Sheet',
      icon: 'ti-time',
      type: 'link',
      active: false,
    },
    {
      title: 'Logs',
      type: 'sub',
      icon: 'ti-file',
      active: false,
      children: [
        {
          path: '/admin/logs/edit',
          title: 'Edit Logs',
          type: 'link',
        },
        {
          path: '/admin/logs/sync',
          title: 'Sync',
          type: 'link',
        },
        {
          path: '/admin/logs/access',
          title: 'Access',
          type: 'link',
        }
      ]
    },
    {
      title: 'BusPulse Simulator',
      type: 'sub',
      icon: 'ti-pulse',
      active: false,
      children: [
        {
          path: '/admin/simulator/asset-tracker',
          title: 'Asset Tracker',
          type: 'link',
        },
        {
          path: '/admin/simulator/create-ticket',
          title: 'Create Ticket',
          type: 'link',
        },
        {
          path: '/admin/simulator/create-snag',
          title: 'Create Snag',
          type: 'link',
        },
        {
          path: '/admin/simulator/create-timesheet',
          title: 'Create Timesheet',
          type: 'link',
        },
        {
          path: '/admin/simulator/inspection-list',
          title: 'Inspection List',
          type: 'link',
        }
      ]
    },
    {
      title: 'REPORTS',
      type: 'sub',
      icon: 'ti-panel',
      active: false,
      children: [
        {
          title: 'Ticket Reports',
          type: 'sub',
          children: [
            {
              path: '/admin/reports/ticket-reports/daily',
              title: 'Daily Reports',
              type: 'link',
            },
            {
              path: '/admin/reports/ticket-reports/weekly',
              title: 'Weekly Report',
              type: 'link',
            }
          ]
        },
        {
          title: 'Vehicle Reports',
          type: 'sub',
          children: [
            {
              path: '/admin/reports/vehicle-reports/ticket-report',
              title: 'Vehicle Ticket Report',
              type: 'link',
            },
            {
              path: '/admin/reports/vehicle-reports/station-tracker',
              title: 'Vehicle Station Tracker Report',
              type: 'link',
            },
            {
              path: '/admin/reports/vehicle-reports/final-reports',
              title: 'Vehicle Final Reports',
              type: 'link',
            }
          ]
        },
        {
          title: 'Administrative Reports',
          type: 'sub',
          children: [
            {
              path: '/admin/reports',
              title: 'All Reports',
              type: 'link',
            }
          ]
        }
      ]
    },
    {
      title: 'Vehicles',
      type: 'sub',
      icon: 'ti-truck',
      active: false,
      children: [
        {
          path: '/admin/vehicles/list',
          title: 'Vehicle List',
          type: 'link',
        },
        {
          path: '/admin/vehicles/management',
          title: 'Vehicle Management',
          type: 'link',
        }
      ]
    },
    {
      path: '/admin/snags',
      title: 'Snags',
      icon: 'ti-flag',
      type: 'link',
      active: false,
    },
    {
      path: '/admin/tickets',
      title: 'Tickets',
      icon: 'ti-ticket',
      type: 'link',
      active: false,
    },
    {
      // YRT Data entry removed
    }
  ];

  // Client Menu Items
  CLIENT_MENUITEMS: Menu[] = [
    { headTitle: 'Client Portal' },
    {
      path: '/client/dashboard',
      title: 'Dashboard',
      icon: 'ti-dashboard',
      type: 'link',
      active: false,
      selected: false
    },
    {
      path: '/client/assets',
      title: 'Asset Requests',
      icon: 'ti-menu',
      type: 'link',
      active: false,
    },
    {
      path: '/client/tickets',
      title: 'Tickets',
      icon: 'ti-ticket',
      type: 'link',
      active: false,
    },
    {
      path: '/client/snags',
      title: 'Snags',
      icon: 'ti-flag',
      type: 'link',
      active: false,
    },
    {
      path: '/client/projects',
      title: 'Projects',
      type: 'sub',
      icon: 'ti-layout',
      active: false,
      children: [
        {
          path: '/client/projects/list',
          title: 'Projects',
          type: 'link',
        },
        {
          path: '/client/projects/final-vehicle',
          title: 'Final Vehicle',
          type: 'link',
        }
      ]
    },
    {
      path: '/client/stations',
      title: 'STATIONS',
      type: 'sub',
      icon: 'ti-rocket',
      active: false,
      children: [
        {
          path: '/client/stations/list',
          title: 'Station',
          type: 'link',
        },
        {
          path: '/client/stations/tracker',
          title: 'Station Tracker',
          type: 'link',
        }
      ]
    },
    {
      path: '/client/vehicles',
      title: 'Vehicles',
      type: 'sub',
      icon: 'ti-truck',
      active: false,
      children: [
        {
          path: '/client/vehicles/list',
          title: 'Vehicles',
          type: 'link',
        },
        {
          path: '/client/vehicles/propulsion',
          title: 'Propulsion',
          type: 'link',
        },
        {
          path: '/client/vehicles/mileage',
          title: 'Mileage',
          type: 'link',
        }
      ]
    },
    {
      title: 'REPORTS',
      type: 'sub',
      icon: 'ti-panel',
      active: false,
      children: [
        {
          title: 'Ticket Reports',
          type: 'sub',
          children: [
            {
              path: '/client/reports/ticket-reports/daily',
              title: 'Daily Reports',
              type: 'link',
            },
            {
              path: '/client/reports/ticket-reports/weekly',
              title: 'Weekly Report',
              type: 'link',
            }
          ]
        },
        {
          title: 'Vehicle Reports',
          type: 'sub',
          children: [
            {
              path: '/client/reports/vehicle-reports/ticket-report',
              title: 'Vehicle Ticket Report',
              type: 'link',
            },
            {
              path: '/client/reports/vehicle-reports/station-tracker',
              title: 'Vehicle Station Tracker Report',
              type: 'link',
            },
            {
              path: '/client/reports/vehicle-reports/final-reports',
              title: 'Vehicle Final Reports',
              type: 'link',
            }
          ]
        },
        {
          title: 'Administrative Reports',
          type: 'sub',
          children: [
            {
              path: '/client/reports',
              title: 'All Reports',
              type: 'link',
            }
          ]
        }
      ]
    },
  ];

  // Default/Original Menu Items
  MENUITEMS: Menu[] = [
    //title
    { headTitle: 'Bus Pulse'},
    {
      title: 'Dashboard',
      path: '/dashboard',
      type: 'link',
      icon: 'ti-dashboard',
      active: false,
      selected:false
    },
    {
      path: '/assets',
      title: 'Asset Requests',
      icon: 'ti-menu',
      type: 'link',
      active: false,
    },
    {
      path: '/tickets',
      title: 'Tickets',
      icon: 'ti-ticket',
      type: 'link',
      active: false,
    },
    {
      path: '/snags',
      title: 'Snags',
      icon: 'ti-ticket',
      type: 'link',
      active: false,
    },
    {
      path: '/projects',
      title: 'Projects',
      type: 'sub',
      icon: 'ti-layout',
      active: false,
      children: [
        {
          path: '/projects/list',
          title: 'Projects',
          type: 'link',
        },
        {
          path: '/projects/final-vehicle',
          title: 'Final Vehicle',
          type: 'link',
        }]
    },

    {
      path: '/stations',
      title: 'STATIONS',
      type: 'sub',
      icon: 'ti-rocket',
      active: false,
      children: [
        {
          path: '/stations/list',
          title: 'Station',
          type: 'link',
        },
        {
          path: '/stations/tracker',
          title: 'Station Tracker',
          type: 'link',
        }]
    },
    
     {
      path: '/vehicles',
      title: 'Vehicles',
      type: 'sub',
      icon: 'ti-truck',
      active: false,
      children: [
        {
          path: '/vehicles/list',
          title: 'Vehicles',
          type: 'link',
        },
        {
          path: '/vehicles/propulsion',
          title: 'Propulsion',
          type: 'link',
        },
        {
          path: '/vehicles/mileage',
          title: 'Mileage',
          type: 'link',
        }
      ]
    },

    {
      // YRT Data entry removed
    },

{
      path: '/users',
      title: 'USERS',
      type: 'sub',
      icon: 'ti-user',
      active: false,
      children: [
        {
          path: '/users/list',
          title: 'Users',
          type: 'link',
        },
        {
          path: '/users/inspectors',
          title: 'Inspectors',
          type: 'link',
        },
        {
          path: '/users/clients',
          title: 'Clients',
          type: 'link',
        },
        {
          path: '/users/manufacturers',
          title: 'Manufacturers',
          type: 'link',
        },
        {
          path: '/users/time-logs',
          title: 'Time Logs',
          type: 'link',
        },
        {
          path: '/users/access-logs',
          title: 'Access Logs',
          type: 'link',
        },
        {
          path: '/users/sync-logs',
          title: 'Sync Logs',
          type: 'link',
        }
      ]
    },

    {
      title: 'Elements',
      icon: 'ti-package',
      type: 'sub',
      menutype:'mega-menu',
      active: false,
      children: [
        { path: '/elements/accordion', title: 'Accordions & Collapse', type: 'link' },
        { path: '/elements/alerts', title: 'Alerts', type: 'link' },
        { path: '/elements/avatars', title: 'Avatars', type: 'link' },
        { path: '/elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
        { path: '/elements/buttons', title: 'Buttons', type: 'link' },
        { path: '/elements/button-group', title: 'Button Group', type: 'link' },
        { path: '/elements/badge', title: 'Badge', type: 'link' },
        { path: '/elements/dropdowns', title: 'Dropdowns', type: 'link' },
        { path: '/elements/images-figures', title: 'Images & Figures', type: 'link' },
        { path: '/elements/list-group', title: 'List Group', type: 'link' },
        { path: '/elements/navs-tabs', title: 'Navs & Tabs', type: 'link' },
        {
          path: '/elements/object-fit',
          title: 'Object Fit',
          type: 'link',
        },
        { path: '/elements/pagination', title: 'Pagination', type: 'link' },
        { path: '/elements/popover', title: 'Popover', type: 'link' },
        { path: '/elements/progress', title: 'Progress', type: 'link' },
        { path: '/elements/spinners', title: 'Spinners', type: 'link' },
        { path: '/elements/typography', title: 'Typography', type: 'link' },
        { path: '/elements/tooltips', title: 'Tooltips', type: 'link' },
        { path: '/elements/toast', title: 'Toast', type: 'link' },
        { path: '/elements/tags', title: 'Tags', type: 'link' },
      ],
    },
    {
      title: 'Advanced UI',
      icon: 'ti-briefcase',
      type: 'sub',
      active: false,
      children: [
        { path: '/advancedui/carousel', title: 'Carousel', type: 'link' },
        { path: '/advancedui/full-calender', title: 'Full Calendar', type: 'link' },
        {
          path: '/advancedui/draggable-cards',
          title: 'Draggable-Cards',
          type: 'link',
        },
        { path: '/advancedui/chat', title: 'Chat', type: 'link' },
        { path: '/advancedui/contacts', title: 'Contacts', type: 'link' },
        { path: '/advancedui/cards', title: 'Cards', type: 'link' },
        { path: '/advancedui/timeline', title: 'Timeline', type: 'link' },
      
      
        { path: '/advancedui/search', title: 'Search', type: 'link' },
        { path: '/advancedui/userlist', title: 'Userlist', type: 'link' },
        {
          path: '/advancedui/notification',
          title: 'Notification',
          type: 'link',
        },
        { path: '/advancedui/tree-view', title: 'Treeview', type: 'link' },
        { path: '/advancedui/modals-closes', title: 'Modals & Closes', type: 'link' },
        { path: '/advancedui/navbar', title: 'Navbar', type: 'link' },
        { path: '/advancedui/offcanvas', title: 'Offcanvas', type: 'link' },
        { path: '/advancedui/placeholders', title: 'Placeholders', type: 'link' },
        { path: '/advancedui/ratings', title: 'Ratings', type: 'link' },
        { path: '/advancedui/scrollspy', title: 'Scrollspy', type: 'link' },
        { path: '/advancedui/swiperjs', title: 'Swiper Js', type: 'link' },

      ],
    },

    { headTitle: 'Other Pages' },
    {
      title: 'Pages',
      icon: 'ti-palette',
      type: 'sub',
      active: false,
      children: [
        { path: '/pages/profile', title: 'Profile', type: 'link' },
        { path: '/pages/aboutus', title: 'About Us', type: 'link' },
        { path: '/pages/settings', title: 'settings', type: 'link' },
        { path: '/pages/invoice', title: 'Invoice', type: 'link' },
        { path: '/pages/pricing', title: 'Pricing', type: 'link' },
        { path: '/pages/gallery', title: 'Gallery', type: 'link' },
        { path: '/pages/notifications-list', title: 'Notifications list', type: 'link'},
        { path: '/pages/faqs', title: 'Faqs', type: 'link' },
        {
          path: '/alert-pages/success-message',
          title: 'Success Message',
          type: 'link',
        },
        {
          path: '/alert-pages/danger-message',
          title: 'Danger Message',
          type: 'link',
        },
        {
          path: '/alert-pages/warning-message',
          title: 'Warning Message',
          type: 'link',
        },
        { path: '/pages/empty-page', title: 'Empty Page', type: 'link' },
      ],
    },
    {
      title: 'Utilities',
      icon: 'ti-shield',
      type: 'sub',
      active: false,
      children: [
        { path: '/utilities/breakpoints', title: 'BreakPoints', type: 'link' },
        { path: '/utilities/display', title: 'Display', type: 'link' },
        { path: '/utilities/borders', title: 'Borders', type: 'link' },
        { path: '/utilities/colors', title: 'Colors', type: 'link' },
        { path: '/utilities/flex', title: 'Flex', type: 'link' },
        { path: '/utilities/columns', title: 'Columns', type: 'link' },
        { path: '/utilities/gutters', title: 'Gutters', type: 'link' },
        { path: '/utilities/helpers', title: 'Helpers', type: 'link' },
        { path: '/utilities/position', title: 'Position', type: 'link' },
        { path: '/utilities/more', title: 'More', type: 'link' },
      ],
    },
    {
      title: 'Submenus',
      icon: 'ti-panel',
      type: 'sub',
      active: false,
      children: [
        { title: 'Level 1', type: 'empty' },
        {
          title: 'Level 2',
          type: 'sub',
          children: [
            { title: 'Level 2.0', type: 'empty' },
            { title: 'Level 2.1', type: 'empty' },
            { title: 'Level 2.2', type: 'sub', active: false, children: [
                { title: 'Level 2.2.1', type: 'empty' },
                { title: 'Level 2.2.2', type: 'empty' }
              ],
            },
          ],
        },
        { title: 'Level 3', type: 'empty' },
      ],
    },
    {
      title: 'Authentication',
      icon: 'ti-lock',
      type: 'sub',
      active: false,
      children: [
        { path: '/custom/sign-in', title: 'Sign In', type: 'link' },
        { path: '/custom/sign-up', title: 'Sign Up', type: 'link' },
        {
          path: '/custom/forget-password',
          title: 'Forgot Password',
          type: 'link',
        },
        {
          path: '/custom/reset-password',
          title: 'Reset Password',
          type: 'link',
        },
        { path: '/custom/lockscreen', title: 'Lock Screen', type: 'link' },
        {
          path: '/custom/under-construction',
          title: 'Under Construction',
          type: 'link',
        },
        { path: '/custom/error404', title: '404 Error', type: 'link' },
        { path: '/custom/error500', title: '500 Error', type: 'link' },
      ],
    },

    { headTitle: 'Forms & Charts' },
    {
      title: 'Forms',
      type: 'sub',
      icon: 'ti-receipt',
      active: false,
      children: [
        {
          title: 'Form Elements',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/forms/forms-elements/inputs',
              title: 'Inputs',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/checks-radios',
              title: 'Check & Radios',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/input-group',
              title: 'Input Group',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/form-select',
              title: 'Form Select',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/range-slider',
              title: 'Range Slider',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/input-masks',
              title: 'Input Masks',
              type: 'link',
            },
          
         
       
            {
              path: '/forms/forms-elements/file-uploads',
              title: 'File Uploads',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/date-time-picker',
              title: 'Date Time Picker',
              type: 'link',
            },
            {
              path: '/forms/forms-elements/color-picker',
              title: 'Color pickers',
              type: 'link',
            },
          ],
        },
        {
          path: '/forms/floating-labels',
          title: 'Floating Labels',
          type: 'link',
        },
        {
          path: '/forms/form-layouts',
          title: 'Form Layouts',
          type: 'link',
        },
        {
          title: 'Form Editors',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/forms/form-editor/quill-editor',
              title: 'Quill Editor',
              type: 'link',
            },
          ],
        },
        {
          path: '/forms/validation',
          title: 'Validation',
          type: 'link',
        },
        {
          path: '/forms/select2',
          title: 'select2',
          type: 'link',
        },
      ],
    },
    
    {
      title: 'Charts',
      type: 'sub',
      icon: 'ti-bar-chart-alt',
      active: false,
      children: [
        {
          path: '/charts/chartjs-charts',
          title: 'ChartJS',
          type: 'link',
        },
        {
          path: '/charts/echart-charts',
          title: 'Echart',
          type: 'link',
        },
        {
          title: 'Apex Charts',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/charts/apex-charts/line-charts',
              title: 'Line Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/area-charts',
              title: 'Area Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/column-charts',
              title: 'Column-Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/bar-charts',
              title: 'Bar Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/mixed-charts',
              title: 'Mixed charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/range-area-charts',
              title: 'Range Area Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/timeline-charts',
              title: 'TimeLine Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/candlestick-charts',
              title: 'CandleStick Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/boxplot-charts',
              title: 'BoxPlot Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/bubble-charts',
              title: 'Bubble charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/scatter-charts',
              title: 'Scatter Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/heatmap-charts',
              title: 'Heatmap Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/treemap-charts',
              title: 'TreeMap Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/pie-charts',
              title: 'Pie Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/radialbar-charts',
              title: 'Radialbar Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/radar-charts',
              title: 'Radar Charts',
              type: 'link',
            },
            {
              path: '/charts/apex-charts/polararea-charts',
              title: 'Polararea Charts',
              type: 'link',
            },
          ],
        },
      ],
    },
  ];

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

  // Get menu items based on user role
  getMenuByRole(role: string): Menu[] {
    switch(role) {
      case 'superadmin':
        return this.SUPERADMIN_MENUITEMS;
      case 'admin':
        return this.MENUITEMS; // Can be customized for admin
      case 'inspector':
        return this.MENUITEMS; // Can be customized for inspector
      case 'client':
        return this.CLIENT_MENUITEMS; // Custom menu for client
      default:
        return this.MENUITEMS;
    }
  }

  // Update menu items based on role
  loadMenuByRole(role: string): void {
    const menuItems = this.getMenuByRole(role);
    this.items.next(menuItems);
  }
}
