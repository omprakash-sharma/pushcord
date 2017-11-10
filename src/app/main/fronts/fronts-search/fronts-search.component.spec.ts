import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontsSearchComponent } from './fronts-search.component';

describe('FrontsSearchComponent', () => {
  let component: FrontsSearchComponent;
  let fixture: ComponentFixture<FrontsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
