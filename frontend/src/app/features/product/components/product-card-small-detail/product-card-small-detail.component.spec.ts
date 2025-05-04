import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSmallDetailComponent } from './product-card-small-detail.component';

describe('ProductCardSmallDetailComponent', () => {
  let component: ProductCardSmallDetailComponent;
  let fixture: ComponentFixture<ProductCardSmallDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardSmallDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardSmallDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
