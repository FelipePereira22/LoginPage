import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudyComponent } from './form-study.component';

describe('FormStudyComponent', () => {
  let component: FormStudyComponent;
  let fixture: ComponentFixture<FormStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
