import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ShoppingCartService } from '@features/orders/services/shopping-cart.service';
import { ProductCardSmallDetailComponent } from "../../../product/components/product-card-small-detail/product-card-small-detail.component";
import { ConfirmDeleteCartComponent } from "./confirm-delete-shopping-cart/confirm-delete-shopping-cart.component";


@Component({
  selector: 'app-shopping-cart-slide',
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule, FormsModule, MatDialogModule, MatIconModule, ProductCardSmallDetailComponent],
  templateUrl: './shopping-cart-slide.component.html',
  styleUrl: './shopping-cart-slide.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartSlideComponent {

  constructor(
    public dialogRef: MatDialogRef<ShoppingCartSlideComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  shoppingCartService = inject(ShoppingCartService)
  private dialog = inject(MatDialog)


  get cartItems() {
    return this.shoppingCartService.getCartItems()
  }

  openDeleteConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteCartComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.shoppingCartService.clearCart()
      }
    });
  }





}
