import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartService } from '@features/orders/services/shopping-cart.service';
import { ConfirmDeleteCartComponent } from '../shopping-cart-slide/confirm-delete-shopping-cart/confirm-delete-shopping-cart.component';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent {

  shoppingCartService = inject(ShoppingCartService)
  dialog = inject(MatDialog)

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

sendByWhatsapp() {
  let message = 'Hola, quiero pedir los siguientes productos:\n';

  this.cartItems().forEach(p => {
    message += `- ${p.name} (x${p.quantity})\n`;
  });

  message += `_____________________________\nEl total es: $${this.shoppingCartService.getTotal()}`;

  const numero = '593986382929';
  const encodedMessage = encodeURIComponent(message.trim()); // trim() por si acaso
  const url = `https://wa.me/${numero}?text=${encodedMessage}`;

  window.open(url, '_blank');
}


}
