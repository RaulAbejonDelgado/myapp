import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptPrincipalComponent } from './typescript-principal.component';

describe('TypescriptPrincipalComponent', () => {
  let component: TypescriptPrincipalComponent;
  let fixture: ComponentFixture<TypescriptPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
