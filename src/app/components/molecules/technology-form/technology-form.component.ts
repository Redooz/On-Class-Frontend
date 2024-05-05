import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechnologyService } from '../../../technology/services/technology.service';
import { CreateTechnologyRequest } from '../../../technology/dtos/request/create-technology.request';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.scss'],
})
export class TechnologyFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  @Output() technologyCreated = new EventEmitter<void>();
  @Output() technologyNotCreated = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private service: TechnologyService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(90)]],
    });
  }

  private createTechnology() {
    const { name, description }: CreateTechnologyRequest = this.form.value;

    const observable = this.service.createTechnology({ name, description })

    observable.subscribe({
      next: () => {
        console.log('Technology created successfully');
        // close modal
        this.technologyCreated.emit();
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error creating technology', error.status);
        this.technologyNotCreated.emit(error.error.message);
      }

    })
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
