import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrieContratsComponent } from './admin-trie-contrats.component';

describe('AdminTrieContratsComponent', () => {
  let component: AdminTrieContratsComponent;
  let fixture: ComponentFixture<AdminTrieContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrieContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrieContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
