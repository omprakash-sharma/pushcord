import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: AppLandingPageComponent;
  let fixture: ComponentFixture<AppLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
