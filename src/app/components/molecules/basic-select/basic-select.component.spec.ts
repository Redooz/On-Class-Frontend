import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSelectComponent } from './basic-select.component';

describe('BasicSelectComponent', () => {
  let component: BasicSelectComponent;
  let fixture: ComponentFixture<BasicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit selected option', () => {
    const fixture = TestBed.createComponent(BasicSelectComponent);
    const component = fixture.componentInstance;
    const optionValue = 2;
    let emittedValue: number | undefined;

    component.selectedOption.subscribe((value) => {
      emittedValue = value;
    });

    component.onSelectOption({ target: { value: optionValue } });

    expect(emittedValue).toBe(optionValue);
  });
});

