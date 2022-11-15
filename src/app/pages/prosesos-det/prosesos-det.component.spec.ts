import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesosDetComponent } from './prosesos-det.component';

describe('ProsesosDetComponent', () => {
  let component: ProsesosDetComponent;
  let fixture: ComponentFixture<ProsesosDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsesosDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsesosDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
