import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnClassItemComponent } from './on-class-item.component';

describe('OnClassItemComponent', () => {
  let component: OnClassItemComponent;
  let fixture: ComponentFixture<OnClassItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnClassItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnClassItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
