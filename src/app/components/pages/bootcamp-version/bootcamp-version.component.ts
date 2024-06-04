import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBootcampVersionResponse } from '../../../bootcamp-version/dtos/response/get-bootcamp-version.response';
import { BootcampVersionService } from '../../../bootcamp-version/services/bootcamp-version.service';

@Component({
  selector: 'app-bootcamp-version',
  templateUrl: './bootcamp-version.component.html',
  styleUrls: ['./bootcamp-version.component.scss']
})
export class BootcampVersionComponent {
  public modalIsVisible: boolean = false;
  public successIsVisible: boolean = false;
  public errorIsVisible: boolean = false;
  public errorMessage: string = '!Error al crear la capacidad!';
  public bootcampId: number = 0;
  public bootcampName: string = 'Bootcamp';
  public versions: GetBootcampVersionResponse[] = [];

  constructor(private route: ActivatedRoute, private bootcampVersionService: BootcampVersionService, public router: Router) {
    this.bootcampId = Number.parseInt(this.route.snapshot.paramMap.get('id')!) ?? 0;
    this.getVersions();
  }

  getVersions() {
    const observable = this.bootcampVersionService.getBootcampVersions(this.bootcampId);

    observable.subscribe({
      next: (response: any) => {
        this.versions = response;
        this.bootcampName = this.versions[0].bootcamp.name;
      },
      error: (error) => {
        console.error('Error getting versions', error.status);

        if (error.status === 0) {
          this.openError('Conexión al servidor fallida');
          return;
        }

        if (error.status === 403) {
          this.openError('Error de autenticación');
          this.router.navigate(['/login']);
          return;
        }

        if (error.status === 404) {
          this.openError('Versiones del bootcamp no encontradas');
          return;
        }

        this.openError('Error al obtener las versiones del bootcamp');
      }
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
    this.getVersions();
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
