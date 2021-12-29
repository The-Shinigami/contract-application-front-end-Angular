import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieContratsComponent } from './trie-contrats.component';

describe('TrieContratsComponent', () => {
  let component: TrieContratsComponent;
  let fixture: ComponentFixture<TrieContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrieContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
