import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesosTareasComponent } from './prosesos-tareas.component';

describe('ProsesosTareasComponent', () => {
  let component: ProsesosTareasComponent;
  let fixture: ComponentFixture<ProsesosTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsesosTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsesosTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
