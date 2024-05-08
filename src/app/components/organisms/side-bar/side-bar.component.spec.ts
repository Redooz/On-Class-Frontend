import { SideBarComponent } from "./side-bar.component";

describe('SideBarComponent', () => {
  let component: SideBarComponent;

  beforeEach(() => {
    component = new SideBarComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have menuItems defined', () => {
    expect(component.menuItems).toBeDefined();
  });

});
