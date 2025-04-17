import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCartegoryProductsComponent } from './card-cartegory-products.component';

describe('CardCartegoryProductsComponent', () => {
  let component: CardCartegoryProductsComponent;
  let fixture: ComponentFixture<CardCartegoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCartegoryProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCartegoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
