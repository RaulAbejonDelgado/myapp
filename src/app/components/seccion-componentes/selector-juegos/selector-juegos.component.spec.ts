import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorJuegosComponent } from './selector-juegos.component';

describe('SelectorJuegosComponent', () => {
  let component: SelectorJuegosComponent;
  let fixture: ComponentFixture<SelectorJuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorJuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
