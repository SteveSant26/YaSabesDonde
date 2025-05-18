import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ShoppingCartService } from '@features/orders/services/shopping-cart.service';
import { ConfirmDeleteCartComponent } from '../shopping-cart-slide/confirm-delete-shopping-cart/confirm-delete-shopping-cart.component';


@Component({
  selector: 'app-checkout',
  imports: [CommonModule, MatTabsModule],
  templateUrl: './checkout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent {

  shoppingCartService = inject(ShoppingCartService)
  dialog = inject(MatDialog)

  get cartItems() {
    return this.shoppingCartService.getCartItems()
  }

  bankAccounts = [
    {
      label: 'Banco Pichincha',
      bank: 'Banco Pichincha',
      accountNumber: '2210268949',
      holder: 'Diogo García',
      accountType: 'Corriente',
      identification: '1315847481',
      color: 'text-secondary-color' 
    },
    {
      label: 'Banco Guayaquil',
      bank: 'Guayaquil',
      accountNumber: '50643714',
      holder: 'Diogo García',
      accountType: 'Ahorro transaccional',
      identification: '1315847481',
      color: 'text-blue-600' 
    },
    {
      label: 'Banco Produbanco',
      bank: 'Produbanco',
      accountNumber: '27059101054',
      holder: 'Yasabesdonde S.a.s.',
      accountType: 'Cuenta Pro Pyme',
      identification: '1391937744001',
      color: 'text-green-600' 
    }
  ]


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
  const encodedMessage = encodeURIComponent(message.trim()); 
  const url = `https://wa.me/${numero}?text=${encodedMessage}`;

    window.open(url, '_blank');
}


}
