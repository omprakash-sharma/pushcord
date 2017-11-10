import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStoreComponent } from './base-store.component';

describe('BaseStoreComponent', () => {
  let component: BaseStoreComponent;
  let fixture: ComponentFixture<BaseStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
