import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontActivityComponent } from './front-activity.component';

describe('FrontActivityComponent', () => {
  let component: FrontActivityComponent;
  let fixture: ComponentFixture<FrontActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
