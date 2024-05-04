import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.scss'],
})
export class TechnologyFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(90)]],
    });
  }

  private createTechnology() {
    const { name, description } = this.form.value;

    console.log(`Technology created: ${name} - ${description}`);
  }

  onValueChange(controlName: string, value: string) {
    this.form.get(controlName)?.setValue(value);
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.createTechnology();
  }
}
