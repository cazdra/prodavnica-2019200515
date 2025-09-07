// U fajlu psi.component.ts

import { Component, OnInit } from '@angular/core';
import { KorpaService } from 'src/app/korpa/korpa.service';
import { ProdavnicaServis } from 'src/app/welcome/prodavnica.service';
import { Proizvod } from 'src/app/welcome/proizvod.model';

@Component({
  selector: 'app-psi',
  templateUrl: './psi.component.html',
  styleUrls: ['./psi.component.css']
})
export class PsiComponent implements OnInit {

  proizvod: Proizvod[] = [];

  constructor(private prodavnicaService: ProdavnicaServis, private korpaService: KorpaService) {}

  ngOnInit(): void {
    this.proizvod = this.prodavnicaService.getProizvod();
  }

  onAddToCart(proizvod: Proizvod): void {
    this.korpaService.addToCart({
      id: proizvod.id,
      slika: proizvod.slika,
      ime: proizvod.ime,
      rasa: proizvod.rasa,
      velicina: proizvod.velicina,
      godiste: proizvod.godiste,
      cena: proizvod.cena,
      kolicina: 1
    });
  }
}