import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPrincipalComponent } from './cabecera-principal.component';

describe('CabeceraPrincipalComponent', () => {
  let component: CabeceraPrincipalComponent;
  let fixture: ComponentFixture<CabeceraPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
