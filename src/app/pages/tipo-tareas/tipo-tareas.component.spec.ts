import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTareasComponent } from './tipo-tareas.component';

describe('TipoTareasComponent', () => {
  let component: TipoTareasComponent;
  let fixture: ComponentFixture<TipoTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
