import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailContratComponent } from './admin-detail-contrat.component';

describe('AdminDetailContratComponent', () => {
  let component: AdminDetailContratComponent;
  let fixture: ComponentFixture<AdminDetailContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
