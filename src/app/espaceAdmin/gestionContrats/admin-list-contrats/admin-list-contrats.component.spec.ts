import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListContratsComponent } from './admin-list-contrats.component';

describe('AdminListContratsComponent', () => {
  let component: AdminListContratsComponent;
  let fixture: ComponentFixture<AdminListContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
