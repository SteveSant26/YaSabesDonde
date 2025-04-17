import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryImageProductCardComponent } from './gallary-image-product-card.component';

describe('GallaryImageProductCardComponent', () => {
  let component: GallaryImageProductCardComponent;
  let fixture: ComponentFixture<GallaryImageProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallaryImageProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallaryImageProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
