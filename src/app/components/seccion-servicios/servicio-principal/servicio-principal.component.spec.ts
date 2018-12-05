import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPrincipalComponent } from './servicio-principal.component';

describe('ServicioPrincipalComponent', () => {
  let component: ServicioPrincipalComponent;
  let fixture: ComponentFixture<ServicioPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
