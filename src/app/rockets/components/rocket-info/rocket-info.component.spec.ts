import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketInfoComponent } from './rocket-info.component';

describe('RocketInfoComponent', () => {
  let component: RocketInfoComponent;
  let fixture: ComponentFixture<RocketInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
