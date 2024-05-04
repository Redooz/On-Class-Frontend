import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  openModal(modelTemplate: TemplateRef<any>) {
    this.modalService
      .open(modelTemplate, { title: 'Crear tecnologia' })
      .subscribe((action) => {
        console.log("modalAction", action);
      });
  }
}
