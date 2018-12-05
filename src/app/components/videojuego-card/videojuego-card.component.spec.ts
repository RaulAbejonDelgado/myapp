import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoCardComponent } from './videojuego-card.component';

describe('VideojuegoCardComponent', () => {
  let component: VideojuegoCardComponent;
  let fixture: ComponentFixture<VideojuegoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
