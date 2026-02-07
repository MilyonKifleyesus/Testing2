import { ComponentFixture, TestBed, fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';
import { AddCompanyModalComponent } from './add-company-modal.component';
import { WarRoomService } from '../../../../../shared/services/war-room.service';

describe('AddCompanyModalComponent (unit)', () => {
  let fixture: ComponentFixture<AddCompanyModalComponent>;
  let component: AddCompanyModalComponent;
  let warRoomService: jasmine.SpyObj<WarRoomService>;

  beforeEach(async () => {
    const warRoomServiceStub = jasmine.createSpyObj<WarRoomService>('WarRoomService', ['parseLocationInput']);

    await TestBed.configureTestingModule({
      imports: [AddCompanyModalComponent],
      providers: [{ provide: WarRoomService, useValue: warRoomServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCompanyModalComponent);
    component = fixture.componentInstance;
    warRoomService = TestBed.inject(WarRoomService) as jasmine.SpyObj<WarRoomService>;
    fixture.detectChanges();
  });

  it('sets loading state on submit', fakeAsync(() => {
    let resolveLocation: (value: { latitude: number; longitude: number }) => void;
    const locationPromise = new Promise<{ latitude: number; longitude: number }>((resolve) => {
      resolveLocation = resolve;
    });
    warRoomService.parseLocationInput.and.returnValue(locationPromise);

    component.companyName.set('Test Company');
    component.location.set('Toronto, Canada');

    component.onSubmit();
    fixture.detectChanges();

    expect(component.submissionState()).toBe('SUBMITTING');
    expect(component.isSubmitting()).toBeTrue();

    resolveLocation!({ latitude: 43.65, longitude: -79.38 });
    flushMicrotasks();
    tick();
  }));

  it('sets error message on submit error', fakeAsync(() => {
    warRoomService.parseLocationInput.and.returnValue(Promise.resolve({ latitude: 0, longitude: 0 }));

    component.companyName.set('Test Company');
    component.location.set('200, 400');

    component.onSubmit();
    flushMicrotasks();
    tick();
    fixture.detectChanges();

    expect(component.submissionState()).toBe('ERROR');
    expect(component.errorMessage()).toContain('Invalid coordinates');
  }));

  it('clears loading and shows success state on success', () => {
    fixture.componentRef.setInput('isVisible', true);
    fixture.detectChanges();
    component.submissionState.set('SUBMITTING');
    component.errorMessage.set(null);

    component.handleSuccess();
    fixture.detectChanges();

    expect(component.submissionState()).toBe('SUCCESS');
    expect(component.isSubmitting()).toBeFalse();

    const successView = fixture.nativeElement.querySelector('.success-view');
    expect(successView).toBeTruthy();
  });
});
