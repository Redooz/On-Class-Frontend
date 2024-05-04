import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInputComponent),
      multi: true,
    },
  ],
})
export class BasicInputComponent {
  @Input() optionLabel: string = '';
  @Input() optionPlaceholder: string = '';
  @Input() optionInputType: string = 'text';
  @Input() optionIsRequired: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  private onChange = (value: string) => {};

  control: FormControl = new FormControl('', this.optionIsRequired ? Validators.required : null);

  get value(): string {
    return this.control.value;
  }

  set value(value: string) {
    this.control.setValue(value);
    this.valueChange.emit(value);
  }

  onInput(event: any) {
    this.onChange(event.target.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    // implement if needed
  }
}
