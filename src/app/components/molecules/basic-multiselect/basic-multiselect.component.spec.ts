import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMultiselectComponent } from './basic-multiselect.component';

describe('BasicMultiselectComponent', () => {
  let component: BasicMultiselectComponent;
  let fixture: ComponentFixture<BasicMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicMultiselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
