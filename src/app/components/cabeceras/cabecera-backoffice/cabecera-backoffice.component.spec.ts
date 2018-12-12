import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraBackofficeComponent } from './cabecera-backoffice.component';

describe('CabeceraBackofficeComponent', () => {
  let component: CabeceraBackofficeComponent;
  let fixture: ComponentFixture<CabeceraBackofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraBackofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
