import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-confirm-delete-cart',
  imports: [
    MatFormFieldModule,
    MatInputModule, MatDialogModule],
  template: `
    <div mat-dialog-container>

    <h2 class="p-5 text-xl font-semibold text-gray-800 mb-4">Confirmar eliminación</h2>
    <mat-dialog-content class="mb-6">
      <p class="text-gray-700">¿Estás seguro de que deseas eliminar este carrito?</p>
      <p class="text-sm text-red-500 font-medium mt-1">Esta acción no se puede deshacer.</p>
    </mat-dialog-content>
    <mat-dialog-actions class="flex justify-end space-x-2">
      <button mat-button mat-dialog-close class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
        Cancelar
      </button>
      <button mat-button [mat-dialog-close]="true" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
        Eliminar
      </button>
    </mat-dialog-actions>
    </div>
  `,
})
export class ConfirmDeleteCartComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteCartComponent>) { }
}