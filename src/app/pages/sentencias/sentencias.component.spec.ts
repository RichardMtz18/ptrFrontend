import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenciasComponent } from './sentencias.component';

describe('SentenciasComponent', () => {
  let component: SentenciasComponent;
  let fixture: ComponentFixture<SentenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
