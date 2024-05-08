import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { TechnologyService } from '../../../technology/services/technology.service';
import { TechnologyFormComponent } from './technology-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('TechnologyFormComponent', () => {
  let component: TechnologyFormComponent;
  let fixture: ComponentFixture<TechnologyFormComponent>;
  let service: TechnologyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TechnologyFormComponent],
      providers: [FormBuilder, TechnologyService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit technologyCreated event when createTechnology is called successfully', () => {
    spyOn(component.technologyCreated, 'emit');
    component.service.createTechnology = jasmine.createSpy().and.returnValue({ subscribe: (args: { next: () => void }) => args.next() });

    component.form.setValue({ name: 'Test Technology', description: 'Test Description' });
    component.createTechnology();
    expect(component.technologyCreated.emit).toHaveBeenCalled();
  });

  it('should emit technologyNotCreated event with error message when createTechnology encounters an error', () => {
    spyOn(component.technologyNotCreated, 'emit');
    const errorMessage = 'Test Error Message';
    const httpErrorResponse = new HttpErrorResponse({ status: 400, statusText: 'Test Error', url: 'Test URL', error: { message: errorMessage } });
    component.service.createTechnology = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: HttpErrorResponse) => void }) => args.error(httpErrorResponse) });

    component.form.setValue({ name: 'Test Technology', description: 'Test Description' });
    component.createTechnology();
    expect(component.technologyNotCreated.emit).toHaveBeenCalledWith(errorMessage);
  });

  it('should emit technologyNotCreated event with "Conexión al servidor fallida" message when createTechnology encounters a server connection error', () => {
    spyOn(component.technologyNotCreated, 'emit');
    const httpErrorResponse = new HttpErrorResponse({ status: 0, statusText: 'Test Error', url: 'Test URL'});
    component.service.createTechnology = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: HttpErrorResponse) => void }) => args.error(httpErrorResponse) });

    component.form.setValue({ name: 'Test Technology', description: 'Test Description' });
    component.createTechnology();
    expect(component.technologyNotCreated.emit).toHaveBeenCalledWith('Conexión al servidor fallida');

  });

  it('should emit technologyNotCreated event with "Error de autenticación" message when createTechnology encounters an authentication error', () => {
    spyOn(component.technologyNotCreated, 'emit');
    const httpErrorResponse = new HttpErrorResponse({ status: 403, statusText: 'Test Error', url: 'Test URL'});
    component.service.createTechnology = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: HttpErrorResponse) => void }) => args.error(httpErrorResponse) });

    component.form.setValue({ name: 'Test Technology', description: 'Test Description' });
    component.createTechnology();
    expect(component.technologyNotCreated.emit).toHaveBeenCalledWith('Error de autenticación');
  });

  it('should update form control value when onValueChange is called', () => {
    const controlName = 'name';
    const value = 'Test Value';
    component.onValueChange(controlName, value);
    expect(component.form.get(controlName)?.value).toEqual(value);
  });

  it('should call createTechnology when onSubmit is called and form is valid', () => {
    spyOn(component, 'createTechnology');
    component.form.setValue({ name: 'Test Technology', description: 'Test Description' });
    component.onSubmit();
    expect(component.createTechnology).toHaveBeenCalled();
  });

  it('should not call createTechnology when onSubmit is called and form is invalid', () => {
    spyOn(component, 'createTechnology');
    component.form.setValue({ name: '', description: '' });
    component.onSubmit();
    expect(component.createTechnology).not.toHaveBeenCalled();
  });
});
