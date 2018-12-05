import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosPrincipalComponent } from './formularios-principal.component';

describe('FormulariosPrincipalComponent', () => {
  let component: FormulariosPrincipalComponent;
  let fixture: ComponentFixture<FormulariosPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
