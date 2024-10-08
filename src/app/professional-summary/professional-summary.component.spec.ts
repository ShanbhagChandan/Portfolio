import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSummaryComponent } from './professional-summary.component';

describe('ProfessionalSummaryComponent', () => {
  let component: ProfessionalSummaryComponent;
  let fixture: ComponentFixture<ProfessionalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
