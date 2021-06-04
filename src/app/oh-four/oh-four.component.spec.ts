import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhFourComponent } from './oh-four.component';

describe('OhFourComponent', () => {
  let component: OhFourComponent;
  let fixture: ComponentFixture<OhFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
