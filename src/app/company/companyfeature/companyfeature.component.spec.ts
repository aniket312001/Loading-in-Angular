import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyfeatureComponent } from './companyfeature.component';

describe('CompanyfeatureComponent', () => {
  let component: CompanyfeatureComponent;
  let fixture: ComponentFixture<CompanyfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
