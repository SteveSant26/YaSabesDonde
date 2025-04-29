import { Component, inject, OnInit } from '@angular/core';
import { AuthService, UserService } from '../../services';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { onFileSelected } from '@shared/utils';

@Component({
  selector: 'edit-page',
  imports: [ReactiveFormsModule ],
  templateUrl: "./edit.page.html",


})
export class EditPage implements OnInit {
  private authService = inject(AuthService);
  private userService = inject(UserService);
  errorMessage = '';

  // Eliminamos el FormControl de 'avatar', porque Angular Forms no maneja archivos directamente
  editForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
  });

  selectedFile: File | undefined = undefined; // Aquí guardamos el archivo seleccionado

  onFileSelected(event: Event) {
    this.selectedFile = onFileSelected(event, false) as File;
  }

  edit(event: Event) {
    event.preventDefault();
    if (!this.editForm.valid) {
      this.errorMessage = 'Please fill in all fields correctly';
      return;
    }
    const formValue = this.editForm.value;

    this.authService.edit({
      username: formValue.username as string,
      email: formValue.email as string,
    }).subscribe({
      next: () => {
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = error.message || 'Edit failed';
      },
    });
  }

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (user) {
      this.editForm.patchValue({
        username: user.username,
        email: user.email,
      });
    }
  }
}
