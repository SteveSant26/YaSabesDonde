import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IInputField } from '@shared/types';
import { ErrorHandler } from '@shared/utils/getErrorMessage';

@Component({
  selector: 'app-auth-form',
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './auth-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  formGroup = input.required<FormGroup>();
  inputFields = input<IInputField[]>();
  title = input<string>();
  btnSubmitLabel = input<string>('Send');

  @Output() formSubmit = new EventEmitter<void>();

  showPassword = false;

  get passwordVisibilityIcon() {
    return this.showPassword ? 'visibility' : 'visibility_off';
  }

  OnSubmit() {
    if (this.formGroup().valid) {
      this.formSubmit.emit();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getErrorMessage(field: IInputField) {
    return ErrorHandler.getErrorMessage(this.formGroup(), field.name);
  }
}
