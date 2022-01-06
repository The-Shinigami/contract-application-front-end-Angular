import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChercherContratComponent } from './admin-chercher-contrat.component';

describe('AdminChercherContratComponent', () => {
  let component: AdminChercherContratComponent;
  let fixture: ComponentFixture<AdminChercherContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChercherContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChercherContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
