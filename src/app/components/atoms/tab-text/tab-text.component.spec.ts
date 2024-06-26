import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTextComponent } from './tab-text.component';

describe('TabTextComponent', () => {
  let component: TabTextComponent;
  let fixture: ComponentFixture<TabTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input property optionText', () => {
    expect(component.optionText).toBeDefined();
  });

  it('should have an input property optionRoute', () => {
    expect(component.optionRoute).toBeDefined();
  });
});
