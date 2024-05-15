import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not change the current page or emit a new page number when calling changePage method with an invalid page number', () => {
    // Arrange
    const component = TestBed.createComponent(PaginationComponent).componentInstance;
    const initialPage = component.currentPage;
    let emittedPage: number | undefined;
    component.pageChanged.subscribe((page: number) => emittedPage = page);

    // Act
    component.changePage(-1);

    // Assert
    expect(component.currentPage).toBe(initialPage);
    expect(emittedPage).toBeUndefined();
  });
});
