import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifierContratComponent } from './admin-modifier-contrat.component';

describe('AdminModifierContratComponent', () => {
  let component: AdminModifierContratComponent;
  let fixture: ComponentFixture<AdminModifierContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifierContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifierContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
