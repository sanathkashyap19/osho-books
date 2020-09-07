import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantProductsComponent } from './relevant-products.component';

describe('RelevantProductsComponent', () => {
  let component: RelevantProductsComponent;
  let fixture: ComponentFixture<RelevantProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevantProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevantProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
