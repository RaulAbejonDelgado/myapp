import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotyBuscarComponent } from './spoty-buscar.component';

describe('SpotyBuscarComponent', () => {
  let component: SpotyBuscarComponent;
  let fixture: ComponentFixture<SpotyBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotyBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotyBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
