import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologiesComponent } from './technologies.component';
import { TechnologyService } from 'src/app/technology/services/technology.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { GetTechnologyResponse } from 'src/app/technology/dtos/response/get-technology.response';

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologiesComponent],
      providers: [TechnologyService, HttpClient, HttpHandler],
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

  it('should change the sorting order and update button icon', () => {
    component.isAscending = true;
    component.buttonIcon = 'fa fa-arrow-up-a-z';

    component.changeSorting();

    expect(component.isAscending).toBeFalse();
    expect(component.buttonIcon).toBe('fa fa-arrow-down-a-z');
  });

  it('should call getTechnologies method with updated sorting order', () => {
    spyOn(component, 'getTechnologies');

    component.isAscending = true;

    component.changeSorting();

    expect(component.getTechnologies).toHaveBeenCalledWith(component.selectedSize, 0);
  });

  it('should call getTechnologies method with updated selected size', () => {
    spyOn(component, 'getTechnologies');

    const selectedSize = 10;
    component.onSelectedOptionChange(selectedSize);

    expect(component.selectedSize).toBe(selectedSize);
    expect(component.getTechnologies).toHaveBeenCalledWith(selectedSize, 0);
  });

  it('should fetch technologies', () => {
    spyOn(component, 'getTechnologies');

    const size = 10;
    const page = 0;

    component.getTechnologies(size, page);

    expect(component.getTechnologies).toHaveBeenCalledWith(size, page);
  });

  it('should change the page and fetch technologies', () => {
    spyOn(component, 'getTechnologies');

    const page = 1;

    component.onPageChange(page);

    expect(component.getTechnologies).toHaveBeenCalledWith(component.selectedSize, page - 1);
  });

  it('should fetch technologies count', () => {
    spyOn(component, 'getTotalItems');

    component.getTotalItems();

    expect(component.getTotalItems).toHaveBeenCalled();
  });

});
