import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveFormComponent } from './add-remove-form.component';

describe('AddRemoveFormComponent', () => {
  let component: AddRemoveFormComponent;
  let fixture: ComponentFixture<AddRemoveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemoveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
