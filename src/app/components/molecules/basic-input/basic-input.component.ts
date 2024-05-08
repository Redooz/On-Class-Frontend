import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
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
export class BasicInputComponent implements OnInit {
  private onChange = (value: string) => {};
  public control: FormControl = new FormControl();
  @Input() optionLabel: string = '';
  @Input() optionPlaceholder: string = '';
  @Input() optionInputType: string = 'text';
  @Input() optionIsRequired: boolean = false;
  @Input() optionMaxLength: number = 0;
  @Output() valueChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.control.setValidators([
      Validators.required,
      Validators.maxLength(this.optionMaxLength),
    ]);
  }

  getErrorMessage(): string {
    const errors = this.control.errors;

    if (errors?.['required']) {
      return 'Este campo es requerido';
    } else if (errors?.['minlength']) {
      return `Debe tener al menos ${errors?.['minlength'].requiredLength} caracteres`;
    } else if (errors?.['maxlength']) {
      return `Debe tener como máximo ${errors?.['maxlength'].requiredLength} caracteres`;
    }

    return '';
  }

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
