import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraTypescriptComponent } from './cabecera-typescript.component';

describe('CabeceraTypescriptComponent', () => {
  let component: CabeceraTypescriptComponent;
  let fixture: ComponentFixture<CabeceraTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
