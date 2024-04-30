import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {

  @Input() optionTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
