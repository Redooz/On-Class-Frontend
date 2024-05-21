import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityFormComponent } from './capacity-form.component';

describe('CapacityFormComponent', () => {
  let component: CapacityFormComponent;
  let fixture: ComponentFixture<CapacityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
