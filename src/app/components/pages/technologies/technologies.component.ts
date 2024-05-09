import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  public modalIsVisible: boolean = false;
  public successIsVisible: boolean = false;
  public errorIsVisible: boolean = false;
  public errorMessage: string = '!Error al crear la tecnología!';
  public technologies: any = [
    {
      name: 'Angular',
      description: 'Angular es un framework de desarrollo para JavaScript creado por Google.',
    },
    {
      name: 'React',
      description: 'React es una biblioteca de JavaScript para construir interfaces de usuario.',
    },
    {
      name: 'Vue',
      description: 'Vue.js es un framework progresivo para construir interfaces de usuario.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

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
