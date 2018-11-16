import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCancellationDialogComponent } from './professional-cancellation-dialog.component';

describe('ProfessionalCancellationDialogComponent', () => {
  let component: ProfessionalCancellationDialogComponent;
  let fixture: ComponentFixture<ProfessionalCancellationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalCancellationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCancellationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
