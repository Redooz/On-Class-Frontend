import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTabComponent } from './nav-tab.component';

describe('NavTabComponent', () => {
  let component: NavTabComponent;
  let fixture: ComponentFixture<NavTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tabs correctly', () => {
    expect(component.tabs).toEqual([
      {
        title: 'Tecnologías',
        route: '/library/technologies'
      },
      {
        title: 'Capacidades',
        route: '/library/capacities'
      },
      {
        title: 'Bootcamps',
        route: '/library/bootcamps'
      }
    ]);
  });
});

