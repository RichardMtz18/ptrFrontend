import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglasDetComponent } from './reglas-det.component';

describe('ReglasDetComponent', () => {
  let component: ReglasDetComponent;
  let fixture: ComponentFixture<ReglasDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglasDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglasDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
