import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasEditableCardComponent } from './frutas-editable-card.component';

describe('FrutasEditableCardComponent', () => {
  let component: FrutasEditableCardComponent;
  let fixture: ComponentFixture<FrutasEditableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutasEditableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasEditableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
