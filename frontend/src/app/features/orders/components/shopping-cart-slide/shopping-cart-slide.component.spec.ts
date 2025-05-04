import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSlideComponent } from './shopping-cart-slide.component';

describe('ShoppingCartSlideComponent', () => {
  let component: ShoppingCartSlideComponent;
  let fixture: ComponentFixture<ShoppingCartSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
