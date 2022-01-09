import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetPropComponent } from './admin-get-prop.component';

describe('AdminGetPropComponent', () => {
  let component: AdminGetPropComponent;
  let fixture: ComponentFixture<AdminGetPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
