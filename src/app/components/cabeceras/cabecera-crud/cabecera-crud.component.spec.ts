import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraCrudComponent } from './cabecera-crud.component';

describe('CabeceraCrudComponent', () => {
  let component: CabeceraCrudComponent;
  let fixture: ComponentFixture<CabeceraCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
