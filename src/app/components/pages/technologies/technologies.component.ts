import { Component } from '@angular/core';
import { GetTechnologyResponse } from 'src/app/technology/dtos/response/get-technology.response';
import { TechnologyService } from '../../../technology/services/technology.service';
import { selectPagination } from '../utils/technologies.constants';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  public modalIsVisible: boolean = false;
  public successIsVisible: boolean = false;
  public errorIsVisible: boolean = false;
  public errorMessage: string = '!Error al crear la tecnología!';
  public technologies: Array<GetTechnologyResponse> = [];
  public isAscending: boolean = true;
  public selectedSize: number = 5;
  public buttonIcon: string = 'fa fa-arrow-up-a-z';
  public sizePaginationOptions = selectPagination
  public totalItems: number = 0;

  constructor(public service: TechnologyService) {
    this.getTechnologies(this.selectedSize, 0);
  }

  changeSorting() {
    this.isAscending = !this.isAscending;
    this.buttonIcon = this.isAscending ? 'fa fa-arrow-up-a-z' : 'fa fa-arrow-down-a-z';
    this.getTechnologies(this.selectedSize, 0)
  }

  onSelectedOptionChange(value: number) {
    this.selectedSize = value;
    this.getTechnologies(this.selectedSize, 0);
  }

  getTechnologies(size: number, page: number) {
    const observable = this.service.getTechnologiesPaginated(size, page, this.isAscending);

    observable.subscribe({
      next: (response: any) => {
        this.technologies = response;
        this.getTotalItems();
      },
      error: (error) => {
        if (error.status === 403) {
          this.openError('Error de autenticación, por favor inicie sesión');
          return;
        }

        console.error('Error getting technologies', error);
        this.openError('Error al obtener las tecnologías');
      },
    });
  }

  onPageChange(page: number) {
    this.getTechnologies(this.selectedSize, page - 1);
  }

  getTotalItems() {
    const observable = this.service.getTechnologiesCount();

    observable.subscribe({
      next: (response: any) => {
        this.totalItems = response;
      },
      error: (error) => {
        console.error('Error getting technologies count', error);
        this.openError('Error al obtener la cantidad de tecnologías');
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
    this.getTechnologies(this.selectedSize, 0);
  }

  openError(error: string) {
    this.errorMessage = error;
    this.errorIsVisible = true;
  }

  closeError() {
    this.errorIsVisible = false;
  }

}
