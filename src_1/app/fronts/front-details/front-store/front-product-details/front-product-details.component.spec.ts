import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontProductDetailsComponent } from './front-product-details.component';

describe('FrontProductDetailsComponent', () => {
  let component: FrontProductDetailsComponent;
  let fixture: ComponentFixture<FrontProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
