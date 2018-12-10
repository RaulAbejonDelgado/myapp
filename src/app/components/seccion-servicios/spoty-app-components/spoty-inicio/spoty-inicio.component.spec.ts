import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotyInicioComponent } from './spoty-inicio.component';

describe('SpotyInicioComponent', () => {
  let component: SpotyInicioComponent;
  let fixture: ComponentFixture<SpotyInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotyInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotyInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
