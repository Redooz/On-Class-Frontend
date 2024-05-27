import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalMessageComponent } from './modal-message.component';

describe('ModalMessageComponent', () => {
  let component: ModalMessageComponent;
  let fixture: ComponentFixture<ModalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalMessageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default optionLabel', () => {
    expect(component.optionLabel).toEqual('Success!');
  });

  it('should have default isSuccessful', () => {
    expect(component.isSuccessful).toBeTrue();
  });

  it('should emit closeEvent when closeModal is called', () => {
    spyOn(component.closeEvent, 'emit');
    component.closeModal();
    expect(component.closeEvent.emit).toHaveBeenCalled();
  });
});
