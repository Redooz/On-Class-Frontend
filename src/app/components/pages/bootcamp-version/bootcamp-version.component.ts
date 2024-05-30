import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  public bootcampName: string = 'Bootcamp Title';
  public versions: any[] = [
    {
      id: 0,
      startDate: "2024-05-28",
      endDate: "2024-05-28",
      maxNumOfStudents: 0,
      bootcamp: {
        id: 0,
        name: "string"
      }
    },
    {
      id: 1,
      startDate: "2024-05-28",
      endDate: "2024-05-28",
      maxNumOfStudents: 0,
      bootcamp: {
        id: 0,
        name: "string"
      }
    },
    {
      id: 2,
      startDate: "2024-05-28",
      endDate: "2024-05-28",
      maxNumOfStudents: 0,
      bootcamp: {
        id: 0,
        name: "string"
      }
    },
    {
      id: 3,
      startDate: "2024-05-28",
      endDate: "2024-05-28",
      maxNumOfStudents: 0,
      bootcamp: {
        id: 0,
        name: "string"
      }
    },
    {
      id: 4,
      startDate: "2024-05-28",
      endDate: "2024-05-28",
      maxNumOfStudents: 0,
      bootcamp: {
        id: 0,
        name: "string"
      }
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.bootcampId = Number.parseInt(this.route.snapshot.paramMap.get('id')!) ?? 0;
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
