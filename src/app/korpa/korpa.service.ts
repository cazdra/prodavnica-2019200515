import { Injectable } from "@angular/core";
import { Proizvod } from "../welcome/proizvod.model";
import { Korpa, KorpaProizvod } from "./korpa.model";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class KorpaService {

    korpa = new BehaviorSubject<Korpa>({ items: [

    ] });

    constructor(private _snackBar: MatSnackBar) {}
  
    addToCart(item: KorpaProizvod): void {
      const items = [...this.korpa.value.items];
  
      const itemInCart = items.find((_item) => _item.id === item.id);
      if (itemInCart) {
        itemInCart.kolicina += 1;
      } else {
        items.push(item);
      }
  
      this.korpa.next({ items });
      this._snackBar.open('Proizvod je dodat u korpu.', 'OK', { duration: 2500 });
    }
  
    removeFromCart(item: KorpaProizvod, updateCart = true): KorpaProizvod[] {
      const filteredItems = this.korpa.value.items.filter(
        (_item) => _item.id !== item.id
      );
  
      if (updateCart) {
        this.korpa.next({ items: filteredItems });
        this._snackBar.open('Proizvod je uklonjen iz korpe', 'OK', {
          duration: 2500,
        });
      }
  
      return filteredItems;
    }
  
    removeQuantity(item: KorpaProizvod): void {
      let itemForRemoval!: KorpaProizvod;
  
      let filteredItems = this.korpa.value.items.map((_item) => {
        if (_item.id === item.id) {
          _item.kolicina--;
          if (_item.kolicina === 0) {
            itemForRemoval = _item;
          }
        }
  
        return _item;
      });
  
      if (itemForRemoval) {
        filteredItems = this.removeFromCart(itemForRemoval, false);
      }
  
      this.korpa.next({ items: filteredItems });
      this._snackBar.open('Jedan proizvod je uklonjen', 'OK', {
        duration: 2500,
      });
    }
  
    clearCart(): void {
      this.korpa.next({ items: [] });
      this._snackBar.open('Korpa je ispraznjena', 'OK', {
        duration: 2500,
      });
    }
  
    getTotal(items: KorpaProizvod[]): number {
      return items
        .map((item) => item.cena * item.kolicina)
        .reduce((prev, current) => prev + current, 0);
    }

    
  }
  

