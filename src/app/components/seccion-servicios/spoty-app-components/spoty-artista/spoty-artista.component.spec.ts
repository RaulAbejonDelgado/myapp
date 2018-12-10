import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotyArtistaComponent } from './spoty-artista.component';

describe('SpotyArtistaComponent', () => {
  let component: SpotyArtistaComponent;
  let fixture: ComponentFixture<SpotyArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotyArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotyArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
