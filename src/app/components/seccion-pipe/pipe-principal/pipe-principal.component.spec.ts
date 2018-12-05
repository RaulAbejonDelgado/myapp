import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePrincipalComponent } from './pipe-principal.component';

describe('PipePrincipalComponent', () => {
  let component: PipePrincipalComponent;
  let fixture: ComponentFixture<PipePrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
