import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontContactPointsComponent } from './front-contact-points.component';

describe('FrontContactPointsComponent', () => {
  let component: FrontContactPointsComponent;
  let fixture: ComponentFixture<FrontContactPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontContactPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontContactPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
