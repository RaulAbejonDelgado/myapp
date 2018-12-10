import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionBackofficeComponent } from './seccion-backoffice.component';

describe('SeccionBackofficeComponent', () => {
  let component: SeccionBackofficeComponent;
  let fixture: ComponentFixture<SeccionBackofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionBackofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
