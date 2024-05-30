import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampVersionComponent } from './bootcamp-version.component';

describe('BootcampVersionComponent', () => {
  let component: BootcampVersionComponent;
  let fixture: ComponentFixture<BootcampVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
