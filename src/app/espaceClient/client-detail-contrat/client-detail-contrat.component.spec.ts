import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailContratComponent } from './client-detail-contrat.component';

describe('ClientDetailContratComponent', () => {
  let component: ClientDetailContratComponent;
  let fixture: ComponentFixture<ClientDetailContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDetailContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
