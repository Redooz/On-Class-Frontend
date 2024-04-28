import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent implements OnInit {
  @Input() optionLabel: string = '';
  @Input() optionPlaceholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
