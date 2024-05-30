import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bootcamp-version',
  templateUrl: './bootcamp-version.component.html',
  styleUrls: ['./bootcamp-version.component.scss']
})
export class BootcampVersionComponent {
  public bootcampId: string = '';
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
    this.bootcampId = this.route.snapshot.paramMap.get('id') ?? '';
  }
}
