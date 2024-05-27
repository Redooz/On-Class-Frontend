import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapacitiesComponent } from './capacities.component';
import { CapacityService } from 'src/app/capacity/services/capacity.service';
import { TechnologyService } from 'src/app/technology/services/technology.service';
import { GetTechnologyResponse } from 'src/app/technology/dtos/response/get-technology.response';
import { GetCapacityResponse } from 'src/app/capacity/dtos/response/get-capacity.response';
import { CapacityOrderByOption } from 'src/app/capacity/utils/capacity-order-by-option';
import { selectPagination } from '../utils/technologies.constants';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CapacitiesComponent', () => {
  let component: CapacitiesComponent;
  let fixture: ComponentFixture<CapacitiesComponent>;
  let capacityService: CapacityService;
  let technologyService: TechnologyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapacitiesComponent],
      providers: [CapacityService, TechnologyService, HttpClient, HttpHandler],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitiesComponent);
    component = fixture.componentInstance;
    capacityService = TestBed.inject(CapacityService);
    technologyService = TestBed.inject(TechnologyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change sorting', () => {
    component.isAscending = true;
    component.buttonIcon = 'fa fa-arrow-up';
    component.changeSorting();
    expect(component.isAscending).toBeFalse();
    expect(component.buttonIcon).toBe('fa fa-arrow-down');
  });

  it('should call getCapacities with selected size, page, and orderBy on selected option change', () => {
    spyOn(component, 'getCapacities');
    const value = 10;
    component.onSelectedOptionChange(value);
    expect(component.selectedSize).toBe(value);
    expect(component.getCapacities).toHaveBeenCalledWith(
      value,
      0,
      component.selectedOrderBy
    );
  });

  it('should call getCapacities with selected size, page, and orderBy on page change', () => {
    spyOn(component, 'getCapacities');
    const page = 2;
    component.onPageChange(page);
    expect(component.getCapacities).toHaveBeenCalledWith(
      component.selectedSize,
      page - 1,
      component.selectedOrderBy
    );
  });

  it('should call getCapacities with selected size, page, and orderBy on selected orderBy change', () => {
    spyOn(component, 'getCapacities');
    const value = CapacityOrderByOption.TECHNOLOGY_COUNT;
    component.onSelectedOrderByChange(value);
    expect(component.selectedOrderBy).toBe(value);
    expect(component.getCapacities).toHaveBeenCalledWith(
      component.selectedSize,
      0,
      value
    );
  });

  it('should call capacityService.getCapacitiesPaginated and update capacities and totalItems on getCapacities', () => {
    const size = 5;
    const page = 0;
    const orderBy = CapacityOrderByOption.NAME;
    const response: GetCapacityResponse[] = [
      {
        id: 1,
        name: 'Capacity 1',
        description: 'Description 1',
        technologies: [
          { id: 1, name: 'Technology 1' },
          { id: 2, name: 'Technology 2' },
        ],
      },
      {
        id: 2,
        name: 'Capacity 2',
        description: 'Description 1',
        technologies: [
          { id: 1, name: 'Technology 1' },
          { id: 2, name: 'Technology 2' },
        ],
      },
    ];
    spyOn(capacityService, 'getCapacitiesPaginated').and.returnValue(
      of(response)
    );
    spyOn(component, 'getTotalItems');
    component.getCapacities(size, page, orderBy);
    expect(capacityService.getCapacitiesPaginated).toHaveBeenCalledWith(
      size,
      page,
      component.isAscending,
      orderBy
    );
    expect(component.capacities).toEqual(response);
    expect(component.getTotalItems).toHaveBeenCalled();
  });

  it('should call capacityService.getCapacitiesCount and update totalItems on getTotalItems', () => {
    const response = 10;
    spyOn(capacityService, 'getCapacitiesCount').and.returnValue(of(response));
    component.getTotalItems();
    expect(capacityService.getCapacitiesCount).toHaveBeenCalled();
    expect(component.totalItems).toBe(response);
  });

  it('should call technologyService.getAllAvailableTechnologies and update availableTechnologies and technologiesForSelect on getAvailableTechnologies', () => {
    const response: GetTechnologyResponse[] = [
      { id: 1, name: 'Technology 1', description: 'Description 1' },
      { id: 2, name: 'Technology 2', description: 'Description 2' },
    ];
    spyOn(technologyService, 'getAllAvailableTechnologies').and.returnValue(
      of(response)
    );

    component.getAvailableTechnologies();
    expect(technologyService.getAllAvailableTechnologies).toHaveBeenCalled();
    expect(component.availableTechnologies).toEqual(response);
    expect(component.technologiesForSelect).toEqual(
      response.map((technology: GetTechnologyResponse) => {
        return { value: technology.name, label: technology.name };
      })
    );
  });

  it('should set modalIsVisible to true on openModal', () => {
    component.openModal();
    expect(component.modalIsVisible).toBeTrue();
  });

  it('should set modalIsVisible to false on closeModal', () => {
    component.closeModal();
    expect(component.modalIsVisible).toBeFalse();
  });

  it('should set successIsVisible to true on openSuccess', () => {
    component.openSuccess();
    expect(component.successIsVisible).toBeTrue();
  });

  it('should set successIsVisible to false on closeSuccess', () => {
    component.closeSuccess();
    expect(component.successIsVisible).toBeFalse();
  });

  it('should set errorIsVisible to true and set errorMessage on openError', () => {
    const error = 'Error message';
    component.openError(error);
    expect(component.errorMessage).toBe(error);
    expect(component.errorIsVisible).toBeTrue();
  });

  it('should set errorIsVisible to false on closeError', () => {
    component.closeError();
    expect(component.errorIsVisible).toBeFalse();
  });
});
