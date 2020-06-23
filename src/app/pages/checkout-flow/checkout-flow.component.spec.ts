import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFlowComponent } from './checkout-flow.component';

describe('CheckoutFlowComponent', () => {
  let component: CheckoutFlowComponent;
  let fixture: ComponentFixture<CheckoutFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
