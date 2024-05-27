import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BootcampsComponent } from './bootcamps.component';
import { CapacityService } from '../../../capacity/services/capacity.service';
import { BootcampService } from '../../../bootcamp/services/bootcamp.service';
import { of } from 'rxjs';
import { BootcampOrderByOption } from 'src/app/bootcamp/utils/bootcamp-order-by-option';
import { GetBootcampResponse } from 'src/app/bootcamp/dtos/response/get-bootcamp.request';
import { GetCapacityResponse } from '../../../capacity/dtos/response/get-capacity.response';

describe('BootcampsComponent', () => {
  let component: BootcampsComponent;
  let fixture: ComponentFixture<BootcampsComponent>;
  let capacityService: CapacityService;
  let bootcampService: BootcampService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootcampsComponent],
      providers: [
        { provide: CapacityService, useValue: { getAvailableCapacities: () => of([]) } },
        { provide: BootcampService, useValue: { getBootcampsPaginated: () => of([]), getBootcampsCount: () => of([]) } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampsComponent);
    component = fixture.componentInstance;
    capacityService = TestBed.inject(CapacityService);
    bootcampService = TestBed.inject(BootcampService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBootcamps with the correct parameters when changeSorting is called', () => {
    spyOn(component, 'getBootcamps');
    component.changeSorting();
    expect(component.getBootcamps).toHaveBeenCalledWith(component.selectedSize, 0, component.selectedOrderBy);
  });

  it('should call getBootcamps with the correct parameters when onSelectedOptionChange is called', () => {
    spyOn(component, 'getBootcamps');
    const value = 10;
    component.onSelectedOptionChange(value);
    expect(component.getBootcamps).toHaveBeenCalledWith(value, 0, component.selectedOrderBy);
  });

  it('should call getBootcamps with the correct parameters when onPageChange is called', () => {
    spyOn(component, 'getBootcamps');
    const page = 2;
    component.onPageChange(page);
    expect(component.getBootcamps).toHaveBeenCalledWith(component.selectedSize, page - 1, component.selectedOrderBy);
  });

  it('should call getBootcamps with the correct parameters when onSelectedOrderByChange is called', () => {
    spyOn(component, 'getBootcamps');
    const value = BootcampOrderByOption.CAPACITY_COUNT;
    component.onSelectedOrderByChange(value);
    expect(component.getBootcamps).toHaveBeenCalledWith(component.selectedSize, 0, value);
  });

  it('should set bootcamps property when getBootcamps is called successfully', () => {
    const response:Array<GetBootcampResponse> = [];
    spyOn(bootcampService, 'getBootcampsPaginated').and.returnValue(of(response));
    component.getBootcamps(component.selectedSize, 0, component.selectedOrderBy);
    expect(component.bootcamps).toEqual(response);
  });

  it('should set totalItems property when getTotalItems is called successfully', () => {
    const response = 10;
    spyOn(bootcampService, 'getBootcampsCount').and.returnValue(of(response));
    component.getTotalItems();
    expect(component.totalItems).toEqual(response);
  });

  it('should set availableCapacities and capacitiesForSelect properties when getAvailableCapacities is called successfully', () => {
    const response: Array<GetCapacityResponse> = [];
    spyOn(capacityService, 'getAvailableCapacities').and.returnValue(of(response));
    component.getAvailableCapacities();
    expect(component.availableCapacities).toEqual(response);
    expect(component.capacitiesForSelect).toEqual([]);
  });

  it('should set modalIsVisible property to true when openModal is called', () => {
    component.openModal();
    expect(component.modalIsVisible).toBeTrue();
  });

  it('should set modalIsVisible property to false when closeModal is called', () => {
    component.closeModal();
    expect(component.modalIsVisible).toBeFalse();
  });

  it('should set successIsVisible property to true when openSuccess is called', () => {
    component.openSuccess();
    expect(component.successIsVisible).toBeTrue();
  });

  it('should set successIsVisible property to false when closeSuccess is called', () => {
    component.closeSuccess();
    expect(component.successIsVisible).toBeFalse();
  });

  it('should set errorIsVisible property to true and errorMessage property to the provided error when openError is called', () => {
    const error = 'Error message';
    component.openError(error);
    expect(component.errorIsVisible).toBeTrue();
    expect(component.errorMessage).toEqual(error);
  });

  it('should set errorIsVisible property to false when closeError is called', () => {
    component.closeError();
    expect(component.errorIsVisible).toBeFalse();
  });
});
