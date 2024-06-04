import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterAdminRequest } from '../../../auth/dtos/request/register-admin.request';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-admin-form',
  templateUrl: './register-admin-form.component.html',
  styleUrls: ['./register-admin-form.component.scss']
})
export class RegisterAdminFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public minLengthName: number = 3;
  public minLengthLastName: number = 2;
  public minLengthDocumentNumber: number = 9;
  public minLengthTelephone: number = 9;
  @Output() adminRegistered = new EventEmitter<void>();
  @Output() adminNotRegistered = new EventEmitter<string>();

  constructor(public fb: FormBuilder, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      documentNumber: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    });
  }

  registerAdmin() {
    const { name, lastName, documentNumber, telephone, email, password } = this.form.value;
    const admin: RegisterAdminRequest = {
      name,
      lastName,
      documentNumber,
      telephone,
      email,
      password,
    };

    const observable = this.service.registerAdmin(admin);

    observable.subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.adminRegistered.emit();
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating admin', error.status);

        if (error.status === 0) {
          this.adminNotRegistered.emit('Conexión al servidor fallida');
          return;
        }

        this.adminNotRegistered.emit(error.error.message);
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

    if (this.form.value.password !== this.form.value.passwordConfirmation) {
      this.adminNotRegistered.emit('Las contraseñas no coinciden');
      return;
    }

    this.registerAdmin();

  }

}
