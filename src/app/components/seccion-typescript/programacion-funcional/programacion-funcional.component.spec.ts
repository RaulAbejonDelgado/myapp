import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionFuncionalComponent } from './programacion-funcional.component';

describe('ProgramacionFuncionalComponent', () => {
  let component: ProgramacionFuncionalComponent;
  let fixture: ComponentFixture<ProgramacionFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
