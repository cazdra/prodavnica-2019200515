import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProdavnicaServis } from '../welcome/prodavnica.service';
import { Ljubimac } from '../welcome/ljubimac.model';
import { KorpaService } from '../korpa/korpa.service';
import { MatSnackBar } from '@angular/material/snack-bar';

//

@Component({
  selector: 'app-ljubimci-detalji',
  templateUrl: './ljubimci-detalji.component.html',
  styleUrls: ['./ljubimci-detalji.component.css']
})
export class LjubimciDetaljiComponent implements OnInit {
  ljubimac: Ljubimac | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private prodavnicaServis: ProdavnicaServis,
    private korpaService: KorpaService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const ljubimacId = params.get('id');
      if (ljubimacId) {
        const sviLjubimci = this.prodavnicaServis.getLjubimac();
        this.ljubimac = sviLjubimci.find(p => p.id === +ljubimacId);
      }
    });
  }

 onAddToCart(ljubimac: Ljubimac): void {
    this.korpaService.addToCart({
      id: ljubimac.id,
      slika: ljubimac.slika,
      ime: ljubimac.ime,
      rasa: ljubimac.rasa,
      velicina: ljubimac.velicina,
      godiste: ljubimac.godiste,
      cena: ljubimac.cena,
      kolicina: 1
    });
  }
}