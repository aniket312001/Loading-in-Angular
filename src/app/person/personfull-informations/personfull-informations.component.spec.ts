import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonfullInformationsComponent } from './personfull-informations.component';

describe('PersonfullInformationsComponent', () => {
  let component: PersonfullInformationsComponent;
  let fixture: ComponentFixture<PersonfullInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonfullInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonfullInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
