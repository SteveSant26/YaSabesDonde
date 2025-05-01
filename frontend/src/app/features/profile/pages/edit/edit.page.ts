import { Component, inject, OnInit } from '@angular/core';
import { AuthService, UserService } from '@features/auth/services';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { onFileSelected } from '@shared/utils';

@Component({
  selector: 'edit-page',
  imports: [ReactiveFormsModule ],
  templateUrl: "./edit.page.html",


})
export class EditPage implements OnInit {
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

    console.log(formValue);
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
