import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraComponentesComponent } from './cabecera-componentes.component';

describe('CabeceraComponentesComponent', () => {
  let component: CabeceraComponentesComponent;
  let fixture: ComponentFixture<CabeceraComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
