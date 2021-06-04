import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFeatureComponent } from './detail-feature.component';

describe('DetailFeatureComponent', () => {
  let component: DetailFeatureComponent;
  let fixture: ComponentFixture<DetailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
