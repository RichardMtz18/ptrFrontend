import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesosComponent } from './prosesos.component';

describe('ProsesosComponent', () => {
  let component: ProsesosComponent;
  let fixture: ComponentFixture<ProsesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsesosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
