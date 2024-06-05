import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CapacityItem } from 'src/app/bootcamp/dtos/capacity-item';
import { BootcampService } from 'src/app/bootcamp/services/bootcamp.service';
import { GetCapacityResponse } from 'src/app/capacity/dtos/response/get-capacity.response';

@Component({
  selector: 'app-bootcamp-form',
  templateUrl: './bootcamp-form.component.html',
  styleUrls: ['./bootcamp-form.component.scss'],
})
export class BootcampFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public maxLengthName: number = 50;
  public maxLengthDescription: number = 90;
  public selectedCapacities: Set<CapacityItem> = new Set();
  @Input() capacitiesForSelect: any[] = [];
  @Input() availableCapacities: GetCapacityResponse[] = [];
  @Output() bootcampCreated = new EventEmitter<void>();
  @Output() bootcampNotCreated = new EventEmitter<string>();

  constructor(public fb: FormBuilder, public service: BootcampService, public router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  createBootcamp() {
    const { name, description } = this.form.value;
    const bootcamp = {
      name,
      description,
      capacities: Array.from(this.selectedCapacities),
    };

    const observable = this.service.createBootcamp(bootcamp);

    observable.subscribe({
      next: () => {
        console.log('Bootcamp created successfully');
        this.bootcampCreated.emit();
      },
      error: (error) => {
        console.error('Error creating bootcamp', error.status);

        if (error.status === 0) {
          this.bootcampNotCreated.emit('Conexión al servidor fallida');
          return;
        }

        if (error.status === 403) {
          this.bootcampNotCreated.emit('Error de autenticación');
          this.router.navigate(['/login']);
          return;
        }

        this.bootcampNotCreated.emit(error.error.message);
      },
    });
  }

  onValueChange(controlName: string, value: string) {
    this.form.get(controlName)?.setValue(value);
  }

  onSelectOption(capacityName: string) {
    if (this.selectedCapacities.size >= 4) {
      this.bootcampNotCreated.emit(
        'No puedes seleccionar más de 4 capacidades'
      );
      return;
    }

    const capacity = this.availableCapacities.find(
      (capacity) => capacity.name === capacityName
    );

    if (!capacity) {
      return;
    }

    this.selectedCapacities.add(capacity);
  }

  removeSelectedCapacity(capacityName: string) {
    const capacity = this.availableCapacities.find(
      (capacity) => capacity.name === capacityName
    );

    if (!capacity) {
      return;
    }

    this.selectedCapacities.delete(capacity);
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    if (this.selectedCapacities.size < 1) {
      this.bootcampNotCreated.emit('Selecciona al menos una capacidad');
      return;
    }

    this.createBootcamp();
  }
}
