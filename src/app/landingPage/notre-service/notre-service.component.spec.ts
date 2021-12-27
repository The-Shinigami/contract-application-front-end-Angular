import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreServiceComponent } from './notre-service.component';

describe('NotreServiceComponent', () => {
  let component: NotreServiceComponent;
  let fixture: ComponentFixture<NotreServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotreServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
