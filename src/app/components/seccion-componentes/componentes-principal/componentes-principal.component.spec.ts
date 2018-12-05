import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesPrincipalComponent } from './componentes-principal.component';

describe('ComponentesPrincipalComponent', () => {
  let component: ComponentesPrincipalComponent;
  let fixture: ComponentFixture<ComponentesPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
