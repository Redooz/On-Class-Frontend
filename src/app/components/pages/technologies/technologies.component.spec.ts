import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologiesComponent } from './technologies.component';

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize modalIsVisible to false', () => {
    expect(component.modalIsVisible).toBeFalse();
  });

  it('should initialize successIsVisible to false', () => {
    expect(component.successIsVisible).toBeFalse();
  });

  it('should initialize errorIsVisible to false', () => {
    expect(component.errorIsVisible).toBeFalse();
  });

  it('should initialize errorMessage to "!Error al crear la tecnología!"', () => {
    expect(component.errorMessage).toBe('!Error al crear la tecnología!');
  });

  it('should open the modal', () => {
    component.openModal();
    expect(component.modalIsVisible).toBeTrue();
  });

  it('should close the modal', () => {
    component.closeModal();
    expect(component.modalIsVisible).toBeFalse();
  });

  it('should open the success message and close the modal', () => {
    component.openSuccess();
    expect(component.modalIsVisible).toBeFalse();
    expect(component.successIsVisible).toBeTrue();
  });

  it('should close the success message', () => {
    component.closeSuccess();
    expect(component.successIsVisible).toBeFalse();
  });

  it('should open the error message with the provided error', () => {
    const error = 'Some error message';
    component.openError(error);
    expect(component.errorMessage).toBe(error);
    expect(component.errorIsVisible).toBeTrue();
  });

  it('should close the error message', () => {
    component.closeError();
    expect(component.errorIsVisible).toBeFalse();
  });
});
