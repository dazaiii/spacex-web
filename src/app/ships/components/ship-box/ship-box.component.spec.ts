import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipBoxComponent } from './ship-box.component';

describe('ShipBoxComponent', () => {
  let component: ShipBoxComponent;
  let fixture: ComponentFixture<ShipBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
