import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionAngularComponent } from './instalacion-angular.component';

describe('InstalacionAngularComponent', () => {
  let component: InstalacionAngularComponent;
  let fixture: ComponentFixture<InstalacionAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
