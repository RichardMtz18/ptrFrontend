import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasReglasComponent } from './tareas-reglas.component';

describe('TareasReglasComponent', () => {
  let component: TareasReglasComponent;
  let fixture: ComponentFixture<TareasReglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasReglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasReglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
