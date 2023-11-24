import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTaskDialogComponentComponent } from './complete-task-dialog-component.component';

describe('CompleteTaskDialogComponentComponent', () => {
  let component: CompleteTaskDialogComponentComponent;
  let fixture: ComponentFixture<CompleteTaskDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteTaskDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteTaskDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
