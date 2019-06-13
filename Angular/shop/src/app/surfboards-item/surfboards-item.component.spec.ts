import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfboardsItemComponent } from './surfboards-item.component';

describe('SurfboardsItemComponent', () => {
  let component: SurfboardsItemComponent;
  let fixture: ComponentFixture<SurfboardsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfboardsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfboardsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
