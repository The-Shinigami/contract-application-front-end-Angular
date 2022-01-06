import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterContratComponent } from './admin-ajouter-contrat.component';

describe('AdminAjouterContratComponent', () => {
  let component: AdminAjouterContratComponent;
  let fixture: ComponentFixture<AdminAjouterContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAjouterContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjouterContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
