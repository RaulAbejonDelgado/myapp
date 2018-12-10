import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotyNavbarComponent } from './spoty-navbar.component';

describe('SpotyNavbarComponent', () => {
  let component: SpotyNavbarComponent;
  let fixture: ComponentFixture<SpotyNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotyNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
