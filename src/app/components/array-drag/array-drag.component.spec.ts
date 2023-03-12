import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDragComponent } from './array-drag.component';

describe('ArrayDragComponent', () => {
  let component: ArrayDragComponent;
  let fixture: ComponentFixture<ArrayDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayDragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
