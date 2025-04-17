import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBrachComponent } from './card-brach.component';

describe('CardBrachComponent', () => {
  let component: CardBrachComponent;
  let fixture: ComponentFixture<CardBrachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBrachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBrachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
