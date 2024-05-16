import { Component, OnInit } from '@angular/core';
import { GetTechnologyResponse } from 'src/app/technology/dtos/response/get-technology.response';
import { TechnologyService } from 'src/app/technology/services/technology.service';

@Component({
  selector: 'app-capacities',
  templateUrl: './capacities.component.html',
  styleUrls: ['./capacities.component.scss']
})
export class CapacitiesComponent {
  public modalIsVisible: boolean = true;
  public successIsVisible: boolean = false;
  public errorIsVisible: boolean = false;
  public errorMessage: string = '!Error al crear la capacidad!';
  public technologiesForSelect: any[] = [];
  public availableTechnologies: GetTechnologyResponse[] = [];

  constructor(private technologyService: TechnologyService) {
    this.getTechnologies();
  }

  getTechnologies() {
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
