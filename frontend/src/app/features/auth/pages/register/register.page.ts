import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services';
import { authRoutesConfig } from '../../config';
import { IInputField, NotificationType } from '@shared/types';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
// import { NotificationsService, AppInformationService } from '@shared/services';
import { NotificationsService } from '@shared/services';

@Component({
  selector: 'register-page',
  imports: [RouterLink, AuthFormComponent],
  templateUrl: './register.page.html',
})
export class RegisterPage {
  registerForm!: FormGroup;
  registerInputFields!: IInputField[];
  authRoutesConfig = authRoutesConfig;
  errorMessage = '';

  private authSevice = inject(AuthService);
  private notificationsService = inject(NotificationsService);
  // private appInformationService = inject(AppInformationService)

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.initRegisterForm();
    // this.appInformationService.setTitle('Register')
  }

  private initRegisterForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
        ],
      ],
      password: ['', [Validators.required]],
    });

    this.registerInputFields = [
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        placeholder: 'Enter your email',
        autocomplete: 'email',
      },
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        placeholder: 'Enter your username',
        autocomplete: 'username',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        autocomplete: 'new-password',
      },
    ];
  }
  register() {
    if (!this.registerForm.valid) {
      this.errorMessage = 'Please fill in the form';
      this.notificationsService.showAlert(
        this.errorMessage,
        NotificationType.AlertError
      );
      return;
    }
    const { email, username, password } = this.registerForm.value;

    this.authSevice
      .register({
        email: email,
        username: username,
        password: password,
      })
      .subscribe({
        next: () => {
          this.errorMessage = '';
          this.notificationsService.showAlert(
            'Account created succesfully',
            NotificationType.AlertSuccess
          );
        },
        error: (error) => {
          this.errorMessage = error.message || 'Register failed';
          this.notificationsService.showAlert(
            this.errorMessage,
            NotificationType.AlertError
          );
        },
      });
  }
}
