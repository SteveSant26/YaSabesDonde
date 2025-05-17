import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from '../../services';
import { RouterLink } from '@angular/router';
import { authRoutesConfig } from '../../config';
import { IInputField, NotificationType } from '@shared/types';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { NotificationsService, AppInformationService } from '@shared/services';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [RouterLink, AuthFormComponent],
  templateUrl: './login.page.html',
})
export class LoginPage {
  loginForm!: FormGroup;
  loginFormInputFields!: IInputField[];
  authRoutesConfig = authRoutesConfig;
  errorMessage = '';

  private authSevice = inject(AuthService);
  private notificationsService = inject(NotificationsService);
  private appInformationService = inject(AppInformationService);

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.initLoginForm();
    this.appInformationService.setTitle('Login');
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.loginFormInputFields = [
      {
        name: 'identifier',
        label: 'Correo electrónico o usuario',
        type: 'text',
        placeholder: 'Ingresa tu correo electrónico o usuario',
        autocomplete: 'email',
      },
      {
        name: 'password',
        label: 'Contraseña',
        type: 'password',
        placeholder: 'Ingresa tu contraseña',
        autocomplete: 'current-password',
      },
    ];
  }

  login() {
    if (!this.loginForm.valid) {
      this.errorMessage = 'Please fill in the form';
      this.notificationsService.showAlert(
        this.errorMessage,
        NotificationType.AlertError
      );
      return;
    }
    const { identifier, password } = this.loginForm.value;
    this.authSevice.login(identifier, password).subscribe({
      next: (data) => {
        this.errorMessage = '';
        this.notificationsService.showAlert(
          'Login succesful',
          NotificationType.AlertSuccess
        );
      },
      error: (error) => {
        this.errorMessage = error.message || 'Login failed';
        this.notificationsService.showAlert(
          this.errorMessage,
          NotificationType.AlertError
        );
      },
    });
  }
}
