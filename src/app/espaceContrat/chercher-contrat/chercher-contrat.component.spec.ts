import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherContratComponent } from './chercher-contrat.component';

describe('ChercherContratComponent', () => {
  let component: ChercherContratComponent;
  let fixture: ComponentFixture<ChercherContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
