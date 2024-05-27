import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampFormComponent } from './bootcamp-form.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BootcampFormComponent', () => {
  let component: BootcampFormComponent;
  let fixture: ComponentFixture<BootcampFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BootcampFormComponent ],
      providers: [ FormBuilder, HttpClient, HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form', () => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
  });

  it('should emit bootcampCreated event when createBootcamp is called successfully', () => {
    spyOn(component.bootcampCreated, 'emit');
    component.service.createBootcamp = jasmine.createSpy().and.returnValue({ subscribe: (args: { next: () => void }) => args.next() });

    component.form.setValue({ name: 'Test Bootcamp', description: 'Test Description' });
    component.createBootcamp();
    expect(component.bootcampCreated.emit).toHaveBeenCalled();
  });

  it('should emit bootcampNotCreated event with message when createBootcamp fails', () => {
    spyOn(component.bootcampNotCreated, 'emit');
    component.service.createBootcamp = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: { status: number, error: { message: string } }) => void }) => args.error({ status: 400, error: { message: 'Error message' } }) });

    component.form.setValue({ name: 'Test Bootcamp', description: 'Test Description' });
    component.createBootcamp();
    expect(component.bootcampNotCreated.emit).toHaveBeenCalledWith('Error message');
  });

  it('should emit bootcampNotCreated event with message when createBootcamp fails with status 0', () => {
    spyOn(component.bootcampNotCreated, 'emit');
    component.service.createBootcamp = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: { status: number }) => void }) => args.error({ status: 0 }) });

    component.form.setValue({ name: 'Test Bootcamp', description: 'Test Description' });
    component.createBootcamp();
    expect(component.bootcampNotCreated.emit).toHaveBeenCalledWith('Conexión al servidor fallida');
  });

  it('should emit bootcampNotCreated event with message when createBootcamp fails with status 403', () => {
    spyOn(component.bootcampNotCreated, 'emit');
    component.service.createBootcamp = jasmine.createSpy().and.returnValue({ subscribe: (args: { error: (error: { status: number }) => void }) => args.error({ status: 403 }) });

    component.form.setValue({ name: 'Test Bootcamp', description: 'Test Description' });
    component.createBootcamp();
    expect(component.bootcampNotCreated.emit).toHaveBeenCalledWith('Error de autenticación');
  });

  it('should set value of control in form when onValueChange is called', () => {
    component.ngOnInit();
    component.onValueChange('name', 'Test Bootcamp');
    expect(component.form.get('name')?.value).toBe('Test Bootcamp');
  });

  it('should emit bootcampNotCreated event with message when selecting more than 4 capacities', () => {
    spyOn(component.bootcampNotCreated, 'emit');
    component.selectedCapacities = new Set([
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
      { id: 4, name: 'Test 4' },
    ]);
    component.onSelectOption('Test 5');
    expect(component.bootcampNotCreated.emit).toHaveBeenCalledWith('No puedes seleccionar más de 4 capacidades');
  });

  it('should emit bootcampNotCreated event when capacity is not found', () => {
    spyOn(component.bootcampNotCreated, 'emit');
    component.availableCapacities = [
      { id: 1, name: 'Test 1', description: 'Test Description 1', technologies: [] },
      { id: 2, name: 'Test 2', description: 'Test Description 2', technologies: [] },
      { id: 3, name: 'Test 3', description: 'Test Description 3', technologies: [] },
      { id: 4, name: 'Test 4', description: 'Test Description 4', technologies: [] },
    ];
    component.onSelectOption('Test 5');
    expect(component.bootcampNotCreated.emit).not.toHaveBeenCalled();
  });

  it('should add capacity to selected capacities when onSelectOption is called', () => {
    component.selectedCapacities = new Set([
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
    ]);
    component.availableCapacities = [
      { id: 1, name: 'Test 1', description: 'Test Description 1', technologies: [] },
      { id: 2, name: 'Test 2', description: 'Test Description 2', technologies: [] },
      { id: 3, name: 'Test 3', description: 'Test Description 3', technologies: [] },
      { id: 4, name: 'Test 4', description: 'Test Description 4', technologies: [] },
    ];
    component.onSelectOption('Test 4');
    expect(component.selectedCapacities.size).toBe(4);
  });

  it('should remove capacity from selected capacities when removeSelectedCapacity is called', () => {
    component.selectedCapacities = new Set([
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
    ]);
    component.removeSelectedCapacity('Test 2');
    expect(component.selectedCapacities.size).toBe(3);
  });

});
