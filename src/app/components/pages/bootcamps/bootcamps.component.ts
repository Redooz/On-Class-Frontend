import { Component } from '@angular/core';
import { selectPagination } from '../utils/technologies.constants';
import { OnClassItem } from '../../../utils/on-class-item';
import { GetCapacityResponse } from '../../../capacity/dtos/response/get-capacity.response';
import { BootcampOrderByOption } from '../../../bootcamp/utils/bootcamp-order-by-option';
import { GetBootcampResponse } from '../../../bootcamp/dtos/response/get-bootcamp.request';
import { CapacityService } from '../../../capacity/services/capacity.service';
import { BootcampService } from '../../../bootcamp/services/bootcamp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.scss']
})
export class BootcampsComponent {
  public modalIsVisible: boolean = false;
  public successIsVisible: boolean = false;
  public errorIsVisible: boolean = false;
  public errorMessage: string = '!Error al crear el bootcamp!';
  public totalItems: number = 0;
  public capacitiesForSelect: OnClassItem[] = [];
  public availableCapacities: GetCapacityResponse[] = [];
  public isAscending: boolean = true;
  public selectedOrderBy: BootcampOrderByOption = BootcampOrderByOption.NAME;
  public selectedSize: number = 5;
  public buttonIcon: string = 'fa fa-arrow-up';
  public sizePaginationOptions = selectPagination;
  public orderByOptions = [
    { value: BootcampOrderByOption.NAME, label: 'Nombre' },
    { value: BootcampOrderByOption.CAPACITY_COUNT, label: 'Cantidad de capacidades' },
  ];
  public bootcamps: GetBootcampResponse[] = [];

  constructor(private capacityService: CapacityService, private bootcampService: BootcampService, private router: Router) {
    this.getAvailableCapacities();
    this.getBootcamps(this.selectedSize, 0, this.selectedOrderBy);
  }

  changeSorting() {
    this.isAscending = !this.isAscending;
    this.buttonIcon = this.isAscending ? 'fa fa-arrow-up' : 'fa fa-arrow-down';
    this.getBootcamps(this.selectedSize, 0, this.selectedOrderBy);
  }

  onSelectedOptionChange(value: number) {
    this.selectedSize = value;
    this.getBootcamps(this.selectedSize, 0, this.selectedOrderBy);
  }

  onPageChange(page: number) {
    this.getBootcamps(this.selectedSize, page - 1, this.selectedOrderBy);
  }

  onSelectedOrderByChange(value: BootcampOrderByOption) {
    this.selectedOrderBy = value;
    this.getBootcamps(this.selectedSize, 0, this.selectedOrderBy);
  }

  getBootcamps(size: number, page: number, orderBy: BootcampOrderByOption) {
    const observable = this.bootcampService.getBootcampsPaginated(size, page, this.isAscending, orderBy);

    observable.subscribe({
      next: (response: any) => {
        this.bootcamps = response;
      },
      error: (error) => {
        console.error('Error fetching bootcamps', error);
        this.openError('Error al obtener los bootcamps');
      }
    })
  }

  getTotalItems() {
    const observable = this.bootcampService.getBootcampsCount();

    observable.subscribe({
      next: (response: any) => {
        this.totalItems = response;
      },
      error: (error) => {
        console.error('Error fetching bootcamps count', error);
        this.openError('Error al obtener la cantidad de bootcamps');
      }
    })
  }

  getAvailableCapacities() {
    const observable = this.capacityService.getAvailableCapacities();

    observable.subscribe({
      next: (response: any) => {
        this.totalItems = response.length;
        this.availableCapacities = response;
        this.capacitiesForSelect = response.map((capacity: GetCapacityResponse) => {
          return {
            value: capacity.name,
            label: capacity.name
          }
        });
      },
      error: (error: any) => {
        console.error('Error fetching available capacities', error);
        this.openError('Error al obtener las capacidades disponibles');
      }

    })
  }

  onBootcampClick(bootcampId: number) {
    this.router.navigate([`library/bootcamps/${bootcampId}`]);
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
