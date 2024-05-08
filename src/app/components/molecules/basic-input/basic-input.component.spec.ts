import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { BasicInputComponent } from './basic-input.component';

describe('BasicInputComponent', () => {
  let component: BasicInputComponent;
  let fixture: ComponentFixture<BasicInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BasicInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input property optionLabel', () => {
    expect(component.optionLabel).toBeDefined();
  });

  it('should have an input property optionPlaceholder', () => {
    expect(component.optionPlaceholder).toBeDefined();
  });

  it('should have an input property optionInputType', () => {
    expect(component.optionInputType).toBeDefined();
  });

  it('should have an input property optionIsRequired', () => {
    expect(component.optionIsRequired).toBeDefined();
  });

  it('should have an input property optionMaxLength', () => {
    expect(component.optionMaxLength).toBeDefined();
  });

  it('should have a control property', () => {
    expect(component.control).toBeDefined();
  });

  it('should have a value property', () => {
    expect(component.value).toBeDefined();
  });

  it('should have a set value method', () => {
    expect(component.value).toBeDefined();
  });

  it('should have a getErrorMessage method', () => {
    expect(component.getErrorMessage).toBeDefined();
  });

  it('should have a writeValue method', () => {
    expect(component.writeValue).toBeDefined();
  });

  it('should have a registerOnChange method', () => {
    expect(component.registerOnChange).toBeDefined();
  });

  it('should have a onInput method', () => {
    expect(component.onInput).toBeDefined();
  });

  it('should have a get value method', () => {
    expect(component.value).toBeDefined();
  });

  it('should have a registerOnTouched method', () => {
    expect(component.registerOnTouched).toBeDefined();
  });

  it('should have a ngOnInit method', () => {
    expect(component.ngOnInit).toBeDefined();
  });

  it('should return "Este campo es requerido" if the control is required and empty', () => {
    component.control.setValidators([Validators.required]);
    component.control.setValue('');
    expect(component.getErrorMessage()).toBe('Este campo es requerido');
  });

  it('should return "Debe tener al menos {requiredLength} caracteres" if the control has minlength error', () => {
    const requiredLength = 5;
    component.control.setValidators([Validators.minLength(requiredLength)]);
    component.control.setValue('abc');
    expect(component.getErrorMessage()).toBe(`Debe tener al menos ${requiredLength} caracteres`);
  });

  it('should return "Debe tener como máximo {requiredLength} caracteres" if the control has maxlength error', () => {
    const requiredLength = 10;
    component.control.setValidators([Validators.maxLength(requiredLength)]);
    component.control.setValue('abcdefghijk');
    expect(component.getErrorMessage()).toBe(`Debe tener como máximo ${requiredLength} caracteres`);
  });

  it('should return an empty string if there are no errors', () => {
    component.control.setErrors(null);
    expect(component.getErrorMessage()).toBe('');
  });

});

