import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketBoxComponent } from './rocket-box.component';

describe('RocketBoxComponent', () => {
  let component: RocketBoxComponent;
  let fixture: ComponentFixture<RocketBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
