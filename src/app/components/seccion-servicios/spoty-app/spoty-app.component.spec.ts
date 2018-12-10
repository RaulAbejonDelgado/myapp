import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotyAppComponent } from './spoty-app.component';

describe('SpotyAppComponent', () => {
  let component: SpotyAppComponent;
  let fixture: ComponentFixture<SpotyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
