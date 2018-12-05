import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraFormulariosComponent } from './cabecera-formularios.component';

describe('CabeceraFormulariosComponent', () => {
  let component: CabeceraFormulariosComponent;
  let fixture: ComponentFixture<CabeceraFormulariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraFormulariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
