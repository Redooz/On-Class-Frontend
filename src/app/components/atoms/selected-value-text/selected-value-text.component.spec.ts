import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedValueTextComponent } from './selected-value-text.component';

describe('SelectedValueTextComponent', () => {
  let component: SelectedValueTextComponent;
  let fixture: ComponentFixture<SelectedValueTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedValueTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedValueTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
