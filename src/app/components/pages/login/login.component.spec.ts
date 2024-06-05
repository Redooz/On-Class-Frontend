import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open register modal', () => {
    component.openRegisterModal();
    expect(component.registerModalIsVisible).toBeTrue();
  });

  it('should close register modal', () => {
    component.closeRegisterModal();
    expect(component.registerModalIsVisible).toBeFalse();
  });

  it('should open success', () => {
    component.openSuccess();
    expect(component.successIsVisible).toBeTrue();
  });

  it('should close success', () => {
    component.closeSuccess();
    expect(component.successIsVisible).toBeFalse();
  });

  it('should open error', () => {
    component.openError('¡Error al registrar el administrador!');
    expect(component.errorIsVisible).toBeTrue();
  });

  it('should close error', () => {
    component.closeError();
    expect(component.errorIsVisible).toBeFalse();
  });
});
