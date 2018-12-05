import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarImagenComponent } from './mostrar-imagen.component';

describe('MostrarImagenComponent', () => {
  let component: MostrarImagenComponent;
  let fixture: ComponentFixture<MostrarImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
