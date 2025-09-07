import { Injectable } from "@angular/core";
import { Korpa, KorpaProizvod } from "./korpa.model";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class KorpaService {

    korpa = new BehaviorSubject<Korpa>({
        items: []
    });

    constructor(private _snackBar: MatSnackBar) {}

    addToCart(item: KorpaProizvod): void {
        const items = [...this.korpa.value.items];
        const itemInCart = items.find((_item) => _item.id === item.id);

        if (itemInCart) {
            itemInCart.kolicina += 1;
            this._snackBar.open('Količina ljubimca je ažurirana.', 'OK', { duration: 2500 });
        } else {
            const newItem: KorpaProizvod = { ...item, status: 'U toku', kolicina: 1, ocena: null };
            items.push(newItem);
            this._snackBar.open('Ljubimac je dodat u korpu.', 'OK', { duration: 2500 });
        }

        this.korpa.next({ items });
    }

    deleteItem(item: KorpaProizvod): boolean {
        if (item.status !== 'Pristigao' && item.status !== 'Otkazano') {
            this._snackBar.open('Ne možete obrisati porudžbinu koja je u toku.', 'Zatvori', { duration: 2500 });
            return false;
        }

        const filteredItems = this.korpa.value.items.filter(
            (_item) => _item.id !== item.id
        );
        this.korpa.next({ items: filteredItems });
        this._snackBar.open('Porudžbina je uklonjena.', 'OK', { duration: 2500 });
        return true;
    }

    markItem(id: number, ocena: number): void {
        let items = this.korpa.value.items;
        const porudzbina = items.find(p => p.id === id);

        if (porudzbina && porudzbina.status === 'Pristigao') {
            porudzbina.ocena = ocena;
            this.korpa.next({ items });
            this._snackBar.open(`Porudžbina ocenjena sa ${ocena} zvezdica!`, 'OK', { duration: 2500 });
        } else {
            this._snackBar.open('Možete oceniti samo dostavljene porudžbine.', 'Zatvori', { duration: 2500 });
        }
    }

    changeStatus(id: number, noviStatus: 'Pristigao' | 'U toku' | 'Otkazano'): void {
        let items = this.korpa.value.items;
        const porudzbina = items.find(p => p.id === id);

        if (porudzbina && (porudzbina.status === 'U toku' || porudzbina.status === 'Otkazano')) {
            porudzbina.status = noviStatus;
            this.korpa.next({ items });
            this._snackBar.open(`Status porudžbine je promenjen u ${noviStatus}.`, 'OK', { duration: 2500 });
        } else {
            this._snackBar.open('Ovu porudžbinu nije moguće modifikovati.', 'Zatvori', { duration: 2500 });
        }
    }

    removeFromCart(id: number): KorpaProizvod[] {
      const filteredItems = this.korpa.value.items.filter(
        (_item) => _item.id !== id
      );
      this.korpa.next({ items: filteredItems });
      return filteredItems;
    }

    clearCart(): void {
        this.korpa.next({ items: [] });
        this._snackBar.open('Korpa je ispraznjena', 'OK', { duration: 2500 });
    }

    getTotal(items: KorpaProizvod[]): number {
        return items
            .map((item) => item.cena * (item.kolicina || 1))
            .reduce((prev, current) => prev + current, 0);
    }
}