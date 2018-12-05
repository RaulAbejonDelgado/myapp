import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasCrudComponent } from './frutas-crud.component';

describe('FrutasCrudComponent', () => {
  let component: FrutasCrudComponent;
  let fixture: ComponentFixture<FrutasCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutasCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
