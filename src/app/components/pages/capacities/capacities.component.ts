import { Component } from '@angular/core';
import { GetTechnologyResponse } from 'src/app/technology/dtos/response/get-technology.response';
import { TechnologyService } from 'src/app/technology/services/technology.service';
import { selectPagination } from '../utils/technologies.constants';
import { CapacityService } from 'src/app/capacity/services/capacity.service';
import { CapacityOrderByOption } from 'src/app/capacity/utils/capacity-order-by-option';
import { GetCapacityResponse } from 'src/app/capacity/dtos/response/get-capacity.response';

@Component({
  selector: 'app-capacities',
  templateUrl: './capacities.component.html',
  styleUrls: ['./capacities.component.scss']
})
export class CapacitiesComponent {
  public modalIsVisible: boolean = false;
  public successIsVisible: boolean = false;
  public errorIsVisible: boolean = false;
  public errorMessage: string = '!Error al crear la capacidad!';
  public technologiesForSelect: any[] = [];
  public availableTechnologies: GetTechnologyResponse[] = [];
  public capacities: GetCapacityResponse[] = [];
  public isAscending: boolean = true;
  public selectedOrderBy: CapacityOrderByOption = CapacityOrderByOption.NAME;
  public selectedSize: number = 5;
  public buttonIcon: string = 'fa fa-arrow-up';
  public sizePaginationOptions = selectPagination
  public orderByOptions = [
    { value: CapacityOrderByOption.NAME, label: 'Nombre' },
    { value: CapacityOrderByOption.TECHNOLOGY_COUNT, label: 'Cantidad de tecnologías' },
  ];
  public totalItems: number = 0;

  constructor(private technologyService: TechnologyService, private capacityService: CapacityService) {
    this.getAvailableTechnologies();
    this.getCapacities(this.selectedSize, 0, this.selectedOrderBy);
  }

  changeSorting() {
    this.isAscending = !this.isAscending;
    this.buttonIcon = this.isAscending ? 'fa fa-arrow-up' : 'fa fa-arrow-down';
    this.getCapacities(this.selectedSize, 0, this.selectedOrderBy);
  }

  onSelectedOptionChange(value: number) {
    this.selectedSize = value;
    this.getCapacities(this.selectedSize, 0, this.selectedOrderBy);
  }

  onPageChange(page: number) {
    this.getCapacities(this.selectedSize, page - 1, this.selectedOrderBy);
  }

  onSelectedOrderByChange(value: CapacityOrderByOption) {
    this.selectedOrderBy = value;
    this.getCapacities(this.selectedSize, 0, this.selectedOrderBy);
  }

  getCapacities(size: number, page: number, orderBy: CapacityOrderByOption) {
    const observable = this.capacityService.getCapacitiesPaginated(size, page, this.isAscending, orderBy);

    observable.subscribe({
      next: (response: any) => {
        this.capacities = response;
        this.getTotalItems();
      },
      error: (error) => {
        console.error('Error getting capacities', error);
        this.openError('Error al obtener las capacidades');
      },
    });
  }

  getTotalItems() {
    const observable = this.capacityService.getCapacitiesCount();

    observable.subscribe({
      next: (response: any) => {
        this.totalItems = response;
      },
      error: (error) => {
        console.error('Error getting capacities count', error);
        this.openError('Error al obtener la cantidad de capacidades');
      },
    });
  }

  getAvailableTechnologies() {
    const observable = this.technologyService.getAllAvailableTechnologies();

    observable.subscribe({
      next: (response: any) => {
        this.availableTechnologies = response;
        this.technologiesForSelect = response.map((technology: GetTechnologyResponse) => {
          return { value: technology.name, label: technology.name };
        });
      },
      error: (error) => {
        console.error('Error getting technologies', error);
        this.openError('Error al obtener las tecnologías');
      },
    });
  }

  openModal() {
    this.modalIsVisible = true;
  }

  closeModal() {
    this.modalIsVisible = false;
  }

  openSuccess() {
    this.closeModal();
    this.successIsVisible = true;
  }

  closeSuccess() {
    this.successIsVisible = false;
  }

  openError(error: string) {
    this.errorMessage = error;
    this.errorIsVisible = true;
  }

  closeError() {
    this.errorIsVisible = false;
  }

}
