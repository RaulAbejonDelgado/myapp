import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPipeComponent } from './cabecera-pipe.component';

describe('CabeceraPipeComponent', () => {
  let component: CabeceraPipeComponent;
  let fixture: ComponentFixture<CabeceraPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
