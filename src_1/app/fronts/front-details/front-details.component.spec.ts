import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDetailsComponent } from './front-details.component';

describe('FrontDetailsComponent', () => {
  let component: FrontDetailsComponent;
  let fixture: ComponentFixture<FrontDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
