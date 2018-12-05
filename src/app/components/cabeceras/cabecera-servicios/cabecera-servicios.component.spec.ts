import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraServiciosComponent } from './cabecera-servicios.component';

describe('CabeceraServiciosComponent', () => {
  let component: CabeceraServiciosComponent;
  let fixture: ComponentFixture<CabeceraServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
