import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontStoreSearchComponent } from './front-store-search.component';

describe('FrontStoreSearchComponent', () => {
  let component: FrontStoreSearchComponent;
  let fixture: ComponentFixture<FrontStoreSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontStoreSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontStoreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
