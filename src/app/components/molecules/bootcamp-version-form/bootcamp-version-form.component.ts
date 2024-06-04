import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateBootcampVersionRequest } from '../../../bootcamp-version/dtos/request/create-bootcamp-version.request';
import { BootcampVersionService } from '../../../bootcamp-version/services/bootcamp-version.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bootcamp-version-form',
  templateUrl: './bootcamp-version-form.component.html',
  styleUrls: ['./bootcamp-version-form.component.scss']
})
export class BootcampVersionFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  @Input() optionBootcampId: number = 0;
  @Output() versionCreated = new EventEmitter<void>();
  @Output() versionNotCreated = new EventEmitter<string>();

  constructor(public fb: FormBuilder, public service: BootcampVersionService, public router: Router) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      maxNumOfStudents: ['', Validators.required],
    });
  }

  createVersion() {
    const { startDate, endDate, maxNumOfStudents } = this.form.value;

    if (new Date(startDate) >= new Date(endDate)) {
      this.versionNotCreated.emit('La fecha de inicio debe ser anterior a la fecha de fin');
      return;
    }

    const version: CreateBootcampVersionRequest = {
      startDate,
      endDate,
      maxNumOfStudents,
      bootcamp: {
        id: this.optionBootcampId
      }
    };

    const observable = this.service.createBootcampVersion(version);

    observable.subscribe({
      next: () => {
        console.log('Version created successfully');
        this.versionCreated.emit();
      },
      error: (error) => {
        console.error('Error creating version', error.status);

        if (error.status === 0) {
          this.versionNotCreated.emit('Conexión al servidor fallida');
          return;
        }

        if (error.status === 403) {
          this.versionNotCreated.emit('Error de autenticación');
          this.router.navigate(['/login']);
          return;
        }

        this.versionNotCreated.emit(error.error.message);
      }
    });

  }

  onValueChange(controlName: string, value: string) {
    this.form.get(controlName)?.setValue(value);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.createVersion();
  }

}
