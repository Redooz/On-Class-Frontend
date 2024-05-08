import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the modal', () => {
    // Arrange
    const removeSpy = spyOn(component.elementRef.nativeElement, 'remove');
    const emitSpy = spyOn(component.closeEvent, 'emit');

    // Act
    component.close();

    // Assert
    expect(removeSpy).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalled();
  });

});
