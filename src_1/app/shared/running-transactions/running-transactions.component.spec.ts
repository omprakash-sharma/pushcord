import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningTransactionsComponent } from './running-transactions.component';

describe('RunningTransactionsComponent', () => {
  let component: RunningTransactionsComponent;
  let fixture: ComponentFixture<RunningTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
