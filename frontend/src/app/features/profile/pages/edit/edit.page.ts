// src/app/features/profile/pages/edit/edit.page.ts
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@features/auth/services';
import { onFileSelected } from '@shared/utils';


@Component({
  selector: 'edit-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit.page.html',
})
export class EditPage implements OnInit {
  private userService = inject(UserService);

  // Formulario reactivo
  editForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
  });

  // Archivo e imagen previa
  selectedFile?: File;
  previewUrl: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (user) {
      this.editForm.patchValue({
        username: user.username,
        email: user.email,
      });
      // Si tu User tiene avatarUrl, descomenta para mostrarla al iniciar:
      // this.previewUrl = user.avatarUrl;
    }
  }

  /** Maneja la selección de imagen y genera vista previa */
  onFileSelected(event: Event): void {
    const file = onFileSelected(event, false) as File;
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => (this.previewUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  /** Envía los cambios incluyendo el archivo, si hay */
  edit(event: Event): void {
    event.preventDefault();
    if (!this.editForm.valid) {
      return;
    }

    // Prepara datos
    const formData = new FormData();
    formData.append('username', this.editForm.value.username!);
    formData.append('email', this.editForm.value.email!);
    if (this.selectedFile) {
      formData.append('avatar', this.selectedFile);
    }

    // TODO: llama a tu servicio para enviar `formData`
    // this.profileService.updateProfile(formData).subscribe(...)
    console.log('Enviando datos:', formData);
  }
}
 