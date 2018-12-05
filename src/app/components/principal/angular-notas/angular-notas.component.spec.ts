import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNotasComponent } from './angular-notas.component';

describe('AngularNotasComponent', () => {
  let component: AngularNotasComponent;
  let fixture: ComponentFixture<AngularNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
