import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  @Output() successfulLogin = new EventEmitter<void>();
  @Output() failedLogin = new EventEmitter<string>();

  constructor(
    public fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const { email, password } = this.form.value;

    const observable = this.service.login({ email, password });

    observable.subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.successfulLogin.emit();
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating admin', error.status);

        if (error.status === 0) {
          this.failedLogin.emit('Conexión al servidor fallida');
          return;
        }

        if (error.status === 400) {
          this.failedLogin.emit('Usuario o contraseña incorrectos');
          return;
        }

        this.failedLogin.emit('Error desconocido');
      },
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.login();
  }

  onValueChange(controlName: string, value: string) {
    this.form.get(controlName)?.setValue(value);
  }
}
