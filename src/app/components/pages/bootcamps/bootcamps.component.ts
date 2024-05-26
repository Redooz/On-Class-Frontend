import { Component } from '@angular/core';
import { GetCapacityResponse } from 'src/app/capacity/dtos/response/get-capacity.response';
import { CapacityService } from 'src/app/capacity/services/capacity.service';

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
  public capacitiesForSelect: any[] = [];
  public availableCapacities: GetCapacityResponse[] = [];

  constructor(private capacityService: CapacityService) {
    this.getAvailableCapacities();
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
