import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDatosComponent } from './tipo-datos.component';

describe('TipoDatosComponent', () => {
  let component: TipoDatosComponent;
  let fixture: ComponentFixture<TipoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
