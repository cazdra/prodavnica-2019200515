import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProdavnicaServis } from '../welcome/prodavnica.service';
import { Proizvod } from '../welcome/proizvod.model';
import { KorpaService } from '../korpa/korpa.service'; // Novo: Uvezite KorpaService
import { MatSnackBar } from '@angular/material/snack-bar'; // Novo: Uvezite MatSnackBar

@Component({
  selector: 'app-proizvod-detalji',
  templateUrl: './proizvod-detalji.component.html',
  styleUrls: ['./proizvod-detalji.component.css']
})
export class ProizvodDetaljiComponent implements OnInit {
  proizvod: Proizvod | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private prodavnicaServis: ProdavnicaServis,
    private korpaService: KorpaService, // Novo: Injektujte KorpaService
    private snackBar: MatSnackBar // Novo: Injektujte MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const proizvodId = params.get('id');
      if (proizvodId) {
        const sviProizvodi = this.prodavnicaServis.getProizvod();
        this.proizvod = sviProizvodi.find(p => p.id === +proizvodId);
      }
    });
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