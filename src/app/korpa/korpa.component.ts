import { Component } from '@angular/core';
import { Korpa, KorpaProizvod } from './korpa.model';
import { KorpaService } from './korpa.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent {

  korpa : Korpa = { items: [
  ]};
  dataSource: Array<KorpaProizvod> = [];
  cartSubscription: Subscription | undefined;
  displayedColumns: Array<string> = [
    'slika',
    'naziv',
    'velicina',
    'kolicina',
    'cena',
    'ukupno',
    'action',
  ]

  constructor(private korpaService: KorpaService) {}
  
  ngOnInit(): void {
    this.cartSubscription = this.korpaService.korpa.subscribe((_cart: Korpa) => {
      this.korpa = _cart;
      this.dataSource = _cart.items;
    });
  }

  getTotal(items: KorpaProizvod[]): number {
    return this.korpaService.getTotal(items);
  }

  onAddQuantity(item: KorpaProizvod): void {
    this.korpaService.addToCart(item);
  }

  onRemoveFromCart(item: KorpaProizvod): void {
    this.korpaService.removeFromCart(item);
  }

  onRemoveQuantity(item: KorpaProizvod): void {
    this.korpaService.removeQuantity(item);
  }

  onClearCart(): void {
    this.korpaService.clearCart();
  }


}
