import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basic-select',
  templateUrl: './basic-select.component.html',
  styleUrls: ['./basic-select.component.scss']
})
export class BasicSelectComponent implements OnInit {
  @Input() optionTitle: string = 'select';
  @Input() options: any[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
  ];
  @Output() selectedOption = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectOption(event: any) {
    this.selectedOption.emit(event.target.value);
  }

}
