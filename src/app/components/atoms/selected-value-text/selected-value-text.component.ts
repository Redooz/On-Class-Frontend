import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-value-text',
  templateUrl: './selected-value-text.component.html',
  styleUrls: ['./selected-value-text.component.scss']
})
export class SelectedValueTextComponent implements OnInit {
  @Input() optionText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
