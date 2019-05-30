import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousleComponent } from './carousle.component';

describe('CarousleComponent', () => {
  let component: CarousleComponent;
  let fixture: ComponentFixture<CarousleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
