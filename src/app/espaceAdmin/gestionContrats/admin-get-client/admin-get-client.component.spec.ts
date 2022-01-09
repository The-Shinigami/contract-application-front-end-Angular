import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetClientComponent } from './admin-get-client.component';

describe('AdminGetClientComponent', () => {
  let component: AdminGetClientComponent;
  let fixture: ComponentFixture<AdminGetClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
