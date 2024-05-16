import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetTechnologyResponse } from 'src/app/technology/dtos/response/get-technology.response';

@Component({
  selector: 'app-capacity-form',
  templateUrl: './capacity-form.component.html',
  styleUrls: ['./capacity-form.component.scss']
})
export class CapacityFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public maxLengthName: number = 50;
  public maxLengthDescription: number = 90;
  public selectedTechnologies: Set<GetTechnologyResponse> = new Set();
  @Input() technologiesForSelect: any[] = [];
  @Input() availableTechnologies: GetTechnologyResponse[] = [];
  @Output() capacityCreated = new EventEmitter<void>();
  @Output() capacityNotCreated = new EventEmitter<string>();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  createCapacity() {
    const { name, description } = this.form.value;

    console.log(name, description, this.selectedTechnologies);
  }

  onValueChange(controlName: string, value: string) {
    this.form.get(controlName)?.setValue(value);
  }

  onSelectOption(technologyName: string) {
    if (this.selectedTechnologies.size >= 20) {
      this.capacityNotCreated.emit('No puedes seleccionar más de 20 tecnologías');
      return;
    }

    const technology = this.availableTechnologies.find((technology) => technology.name === technologyName);

    if (!technology) {
      return;
    }

    this.selectedTechnologies.add(technology);
  }

  removeSelectedTechnology(technologyName: string) {
    const technology = this.availableTechnologies.find((technology) => technology.name === technologyName);

    if (!technology) {
      return;
    }

    this.selectedTechnologies.delete(technology);
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    if (this.selectedTechnologies.size < 3) {
      this.capacityNotCreated.emit('Selecciona al menos tres tecnologías');
      return;
    }

    this.createCapacity();

  }

}
