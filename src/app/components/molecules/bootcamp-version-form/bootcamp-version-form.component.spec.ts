import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BootcampVersionFormComponent } from './bootcamp-version-form.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BootcampVersionFormComponent', () => {
  let component: BootcampVersionFormComponent;
  let fixture: ComponentFixture<BootcampVersionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampVersionFormComponent ],
      providers: [ FormBuilder, HttpClient, HttpHandler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampVersionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit versionNotCreated event when startDate is greater than endDate', () => {
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2021-12-31');
    component.form.patchValue({ startDate, endDate });
    spyOn(component.versionNotCreated, 'emit');
    component.createVersion();
    expect(component.versionNotCreated.emit).toHaveBeenCalledWith('La fecha de inicio debe ser anterior a la fecha de fin');
  });

  it('should emit versionNotCreated event when server connection fails', () => {
    spyOn(component.versionNotCreated, 'emit');
    component.service.createBootcampVersion = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: { status: number }) => void }) => args.error({ status: 0 }) });
    component.createVersion();
    expect(component.versionNotCreated.emit).toHaveBeenCalledWith('Conexión al servidor fallida');
  });

  it('should emit versionNotCreated event when authentication error occurs', () => {
    spyOn(component.versionNotCreated, 'emit');
    component.service.createBootcampVersion = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: { status: number }) => void }) => args.error({ status: 403 }) });
    component.createVersion();
    expect(component.versionNotCreated.emit).toHaveBeenCalledWith('Error de autenticación');
  });

  it('should emit versionNotCreated event with error message when an error occurs', () => {
    const errorMessage = 'Some error message';
    spyOn(component.versionNotCreated, 'emit');
    component.service.createBootcampVersion = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: { status: number, error: { message: string } }) => void }) => args.error({ status: 400, error: { message: errorMessage } }) });
    component.createVersion();
    expect(component.versionNotCreated.emit).toHaveBeenCalledWith(errorMessage);
  });

  it('should emit versionCreated event when version is created successfully', () => {
    spyOn(component.versionCreated, 'emit');
    component.service.createBootcampVersion = jasmine.createSpy().and.returnValue({ subscribe: (args: { next: () => void }) => args.next() });
    component.createVersion();
    expect(component.versionCreated.emit).toHaveBeenCalled();
  });

  it('should set form control value when onValueChange is called', () => {
    const controlName = 'startDate';
    const value = '2022-01-01';
    component.onValueChange(controlName, value);
    expect(component.form.get(controlName)?.value).toEqual(value);
  });

  it('should not call createVersion when onSubmit is called and form is invalid', () => {
    spyOn(component, 'createVersion');
    component.form.setErrors({ invalid: true });
    component.onSubmit();
    expect(component.createVersion).not.toHaveBeenCalled();
  });
});
