import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from '../../pages/utils/select-items';

@Component({
  selector: 'app-basic-multiselect',
  templateUrl: './basic-multiselect.component.html',
  styleUrls: ['./basic-multiselect.component.scss']
})
export class BasicMultiselectComponent {
  @Input() optionLabel: string = '';
  @Input() options: SelectItem[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
  ];
  @Output() selectedOption = new EventEmitter<string>();

  constructor() { }

  onSelectOption(event: any) {
    this.selectedOption.emit(event.target.value);
    // reset select
    event.target.value = '';
  }

}
