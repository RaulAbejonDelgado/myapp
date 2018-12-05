import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFrutasComponent } from './formulario-frutas.component';

describe('FormularioFrutasComponent', () => {
  let component: FormularioFrutasComponent;
  let fixture: ComponentFixture<FormularioFrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioFrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
