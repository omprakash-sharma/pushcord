import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontTransactionsComponent } from './front-transactions.component';

describe('FrontTransactionsComponent', () => {
  let component: FrontTransactionsComponent;
  let fixture: ComponentFixture<FrontTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
