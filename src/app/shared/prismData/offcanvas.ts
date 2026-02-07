export let 
content = `<ng-template #content let-offcanvas>
<div class="offcanvas-header border-bottom border-block-end-dashed">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
    <button (click)="offcanvas.dismiss('Cross click')" type="button" class="btn-close" data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
</div>
<div class="offcanvas-body p-0">
    <div>
        <ul class="list-group list-group-flush mb-0">
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-primary avatar-rounded">
                            NW
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            New Website Created<span class="badge bg-light text-muted float-end">20 Nov 2022</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>30
                            mins ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Prepare for the new project<span class="badge bg-light text-muted float-end">3 Jan
                                2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>2
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-info avatar-rounded"> S </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Decide the live discussion<span class="badge bg-light text-muted float-end">17 Feb
                                2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>3
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md avatar-rounded">
                            <img src="./assets/images/faces/12.jpg" alt="" />
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Meeting at 3:00 pm<span class="badge bg-light text-muted float-end">29 Dec 2022</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>4
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Prepare for presentation<span class="badge bg-light text-muted float-end">31 Dec
                                2022</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>4
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md avatar-rounded">
                            <img src="./assets/images/faces/1.jpg" alt="" />
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Brenda New product launching<span class="badge bg-light text-muted float-end">1 Jan
                                2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>7
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-secondary avatar-rounded">
                            M
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Medeleine Hey! there i'm available<span class="badge bg-light text-muted float-end">5
                                Jan 2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>3
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-info avatar-rounded"> OL </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Olivia New schedule release<span class="badge bg-light text-muted float-end">6 Jan
                                2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>45
                            mins ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-warning avatar-rounded">
                            A
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Kamala Preparing for new admin launch<span class="badge bg-light text-muted float-end">7
                                Jan 2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>28
                            mins ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md avatar-rounded">
                            <img src="./assets/images/faces/6.jpg" alt="" />
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Oisha Meeting with clinet for dinner<span class="badge bg-light text-muted float-end">10
                                Jan 2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>14
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Prepare for the new project<span class="badge bg-light text-muted float-end">3 Jan
                                2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>2
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-info avatar-rounded"> S </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Decide the live discussion<span class="badge bg-light text-muted float-end">17 Feb
                                2023</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>3
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md avatar-rounded">
                            <img src="./assets/images/faces/14.jpg" alt="" />
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Meeting at 3:00 pm<span class="badge bg-light text-muted float-end">29 Dec 2022</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>4
                            hrs ago</span>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span class="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div class="flex-fill">
                        <p class="fw-semibold mb-0">
                            Prepare for presentation<span class="badge bg-light text-muted float-end">31 Dec
                                2022</span>
                        </p>
                        <span class="fs-12 text-muted"><i
                                class="ri-time-line align-middle me-1 d-inline-block"></i>4
                            hrs ago</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</ng-template>`,
offcanvas1 =`<a class="btn btn-primary mb-1 me-1" data-bs-toggle="offcanvas" (click)="open(content)" role="button"
                    aria-controls="offcanvasExample">
                    Link with href
                </a>
                <button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas" (click)="open(content)"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Button with data-bs-target
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header border-bottom border-block-end-dashed">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                </div>
                
                //content
                
                ${content}
                
                //ts
                open(content: any) {
                    this.offcanvasService
                      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
                      .result.then(
                        (result) => {
                          this.closeResult = \`Closed with: \${result}\`;
                        },
                        (reason) => {
                          this.closeResult = \`Dismissed \${this.getDismissReason(reason)}\`;
                        }
                      );
                  }

                  private getDismissReason(reason: any): string {
                    if (reason === OffcanvasDismissReasons.ESC) {
                      return 'by pressing ESC';
                    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
                      return 'by clicking on the backdrop';
                    } else {
                      return \`with: \${reason}\`;
                    }
                  }
                `,
offcanvas2 =` <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
(click)="openNoBackdrop(content)" data-bs-target="#offcanvasScrolling"
aria-controls="offcanvasScrolling">Enable
body scrolling
</button>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
<div class="offcanvas-header border-bottom border-block-end-dashed">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Notifications</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>

</div>

//content
                
${content}

//ts
openNoBackdrop(content: any) {
  this.offcanvasService.open(content, { backdrop: false });
}

`,
offcanvas3 =`
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    (click)="openStaticBackdrop(content)" data-bs-target="#staticBackdrop"
                    aria-controls="staticBackdrop">
                    Toggle static offcanvas
                </button>
                <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header border-bottom border-block-end-dashed">
                        <h5 class="offcanvas-title" id="staticBackdropLabel">Notifications</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                </div>
//content

${content}

//ts 

openStaticBackdrop(content:any) {
    this.offcanvasService.open(content, { backdrop: 'static' });
  }
`,
offcanvas4 =`
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    (click)="EnableBackdrop(content)" data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions">Enable both scrolling &amp;
                    backdrop</button>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header border-bottom border-block-end-dashed">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Notifications</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        <div>
                            <ul class="list-group list-group-flush mb-0">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-primary avatar-rounded">
                                                NW
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">New Website Created<span
                                                    class="badge bg-light text-muted float-end">20 Nov 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>30 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="./assets/images/faces/12.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="./assets/images/faces/1.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Brenda New product launching<span
                                                    class="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-secondary avatar-rounded">
                                                M
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Medeleine Hey! there i'm available<span
                                                    class="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                OL
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Olivia New schedule release<span
                                                    class="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>45 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-warning avatar-rounded">
                                                A
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Kamala Preparing for new admin launch<span
                                                    class="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>28 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="./assets/images/faces/6.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Oisha Meeting with clinet for dinner<span
                                                    class="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="./assets/images/faces/14.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-medium mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
//content

${content}

//ts

EnableBackdrop(content: any) {
  this.offcanvasService.open(content, { scroll: false });
}

`,
offcanvas5 =`
<button class="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas"
                    (click)="openTop(content1)" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
                    offcanvas</button>
                <ng-template #content1 let-offcanvas>
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasTopLabel">
                            Offcanvas top
                        </h5>
                        <button (click)="offcanvas.dismiss('Cross click')" type="button" class="btn-close"
                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">...</div>
                </ng-template>
                <button class="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas"
                    (click)="openRight(content)" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle
                    right
                    offcanvas</button>

                <button class="btn btn-primary mb-1 me-2" type="button" data-bs-toggle="offcanvas"
                    (click)="openBottom(content1)" data-bs-target="#offcanvasBottom"
                    aria-controls="offcanvasBottom">Toggle
                    bottom
                    offcanvas</button>
                   
//content

${content}

//ts


openTop(content: any) {
    this.offcanvasService.open(content, { position: 'top' });
  }

openRight(content: any) {
    this.offcanvasService.open(content, { position: 'end' });
  }

openBottom(content: any) {
    this.offcanvasService.open(content, { position: 'bottom' });
  }
`;