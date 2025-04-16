import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBranchesComponent } from './content-branches.component';

describe('ContentBranchesComponent', () => {
  let component: ContentBranchesComponent;
  let fixture: ComponentFixture<ContentBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBranchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
