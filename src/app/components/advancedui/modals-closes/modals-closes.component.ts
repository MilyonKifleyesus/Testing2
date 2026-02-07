import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/modals';
import * as tsCodedata from '../../../shared/prismData/modals';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2,) {}
  openBasic(basicModal: any) {
    this.modalService.open(basicModal);
  }
 
  ngOnInit(): void {}

  openScale(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }

  openSlideRight(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInRight',
    });
  }

  openSlideBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__backInUp',
    });
  }
  openNewspaper(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__rotateIn',
    });
  }
  openFall(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'effect-fall',
    });
  }
  openFlipHorizontal(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInY',
    });
  }
  openFlipVertical(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openSuperScaled(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }
  openSign(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openRotateBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInUp',
    });
  }
  openRotateLeft(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInLeft',
    });
  }

  openJustMe(justme: any) {
    this.modalService.open(justme, {
      centered: true,
      windowClass: 'dark-modal',
    });
  }

  openright(right: any) {
    this.modalService.open(right, { centered: true });
  }

 
  modalOption: NgbModalOptions = {}; // not null!

  StaticBackdrop(staticbackdropModal: any) {
    this.modalService.open(staticbackdropModal,{backdrop:'static'});
  }

  VerticalCenter(VerticalCenterModal: any) {
    this.modalService.open(VerticalCenterModal, { centered: true });
  }

  GridOpen(gridModal: any) {
    this.modalService.open(gridModal, { size: 'lg' });
  }

  SuccessOpen(successModal: any) {
    this.modalService.open(successModal, { centered: true });
  }

  WarningOpen(warningModal: any) {
    this.modalService.open(warningModal, { centered: true });
  }

  Select2Open(select2Modal: any) {
    this.modalService.open(select2Modal, { size: 'sm' });
  }

  openScrollable(scrollModal: any) {
    this.modalService.open(scrollModal, { scrollable: true });
  }

  scrollableContent(ScrollingcontentModal: any) {
    this.modalService.open(ScrollingcontentModal, { scrollable: true });
  }

  VerticalCenterScroll(VerticalCenterScrollModal: any) {
    this.modalService.open(VerticalCenterScrollModal, { scrollable: true });
  }
  TooltipPopovers(TooltipPopoversModal: any) {
    this.modalService.open(TooltipPopoversModal, { centered: true });
  }

  Gridmodal(GridCenterModal: any) {
    this.modalService.open(GridCenterModal, { centered: true });
  }
  togglemodal(ToggleModal: any) {
    this.modalService.open(ToggleModal, { centered: true });
  }

  togglemodal2(ToggleModal2: any) {
    this.modalService.open(ToggleModal2, { centered: true });
  }

  openSm(SmallModal: any) {
    this.modalService.open(SmallModal, { size: 'sm' });
  }
  openXl(XlContentModal: any) {
    this.modalService.open(XlContentModal, { size: 'xl' });
  }
  openLg(LargeModal: any) {
    this.modalService.open(LargeModal, { size: 'lg' });
  }
  openFullscreen(FullscreenModal: any) {
    this.modalService.open(FullscreenModal, { fullscreen: true });
  }
  BelowSm(BelowSmModal: any) {
    this.modalService.open(BelowSmModal);
  }
  BelowMd(BelowMdModal: any) {
    this.modalService.open(BelowMdModal);
  }
  BelowLg(BelowLgModal: any) {
    this.modalService.open(BelowLgModal);
  }
  BelowXl(BelowXlModal: any) {
    this.modalService.open(BelowXlModal);
  }
  BelowXxl(BelowXxlModal: any) {
    this.modalService.open(BelowXxlModal);
  }
  Openmdo(OpenmdoModal: any) {
    this.modalService.open(OpenmdoModal);
  }
  Openfat(OpenfatModal: any) {
    this.modalService.open(OpenfatModal);
  }
  Opengetbootstrap(OpengetbootstrapModal: any) {
    this.modalService.open(OpengetbootstrapModal);
  }

    // Define modal options
    modalOptions: NgbModalOptions = {
      centered: true
    };

    ToggleModals2(content8:any) {
      if (this.firstModalRef) {
        this.firstModalRef.dismiss();
      }
      this.secondModalRef=this.modalService.open(content8, {centered: true });
      
    }
    
    private firstModalRef: any;
    private secondModalRef: any;
  
     openFirstModal(content6: any) {
    // Close the second modal if it's open
    if (this.secondModalRef) {
      this.secondModalRef.close();
    }

    // Open the first modal
    const modalRef = this.modalService.open(content6, this.modalOptions);
    this.firstModalRef = modalRef;

    modalRef.result.then((result: any) => {
      // Handle modal close event if needed
    }).catch((reason: any) => {
      // Handle modal dismiss event if needed
    });
  }

  openSecondModal(content8: any) {
    // Close the first modal if it's open
    if (this.firstModalRef) {
      this.firstModalRef.close();
    }

    const modalRef = this.modalService.open(content8, this.modalOptions);
    this.secondModalRef = modalRef;

    modalRef.result.then((result: any) => {
      // Handle modal close event if needed
    }).catch((reason: any) => {
      // Handle modal dismiss event if needed
    });
  }
}
