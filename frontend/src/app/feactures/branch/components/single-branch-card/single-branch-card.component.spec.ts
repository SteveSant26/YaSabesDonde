import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBranchCardComponent } from './single-branch-card.component';

describe('SingleBranchCardComponent', () => {
  let component: SingleBranchCardComponent;
  let fixture: ComponentFixture<SingleBranchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBranchCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBranchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
