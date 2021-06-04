import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFeatureComponent } from './one-feature.component';

describe('OneFeatureComponent', () => {
  let component: OneFeatureComponent;
  let fixture: ComponentFixture<OneFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
