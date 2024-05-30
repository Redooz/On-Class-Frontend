import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampVersionFormComponent } from './bootcamp-version-form.component';

describe('BootcampVersionFormComponent', () => {
  let component: BootcampVersionFormComponent;
  let fixture: ComponentFixture<BootcampVersionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampVersionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampVersionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
