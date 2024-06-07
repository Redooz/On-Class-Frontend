import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public registerModalIsVisible: boolean = false;
  public successIsVisible: boolean = false;
  public errorIsVisible: boolean = false;
  public errorMessage: string = '¡Error al registrar el administrador!';

  public loginModalIsVisible: boolean = false;

  constructor() { }

  openRegisterModal() {
    this.registerModalIsVisible = true;
  }

  closeRegisterModal() {
    this.registerModalIsVisible = false;
  }

  openSuccess() {
    this.closeRegisterModal();
    this.successIsVisible = true;
  }

  closeSuccess() {
    this.successIsVisible = false;
  }

  openError(error: string) {
    this.errorMessage = error;
    this.errorIsVisible = true;
  }

  closeError() {
    this.errorIsVisible = false;
  }

  openLoginModal() {
    this.loginModalIsVisible = true;
  }

  closeLoginModal() {
    this.loginModalIsVisible = false;
  }

}
