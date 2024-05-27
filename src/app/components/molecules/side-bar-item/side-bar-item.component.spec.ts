import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarItemComponent } from './side-bar-item.component';

describe('SideBarItemComponent', () => {
  let component: SideBarItemComponent;
  let fixture: ComponentFixture<SideBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct input properties', () => {
    component.optionRoute = 'example-route';
    component.optionIcon = 'example-icon';
    component.optionLabel = 'example-label';

    expect(component.optionRoute).toEqual('example-route');
    expect(component.optionIcon).toEqual('example-icon');
    expect(component.optionLabel).toEqual('example-label');
  });
});
