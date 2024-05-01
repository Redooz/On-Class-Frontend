import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() optionTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
