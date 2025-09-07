import { Component } from '@angular/core';
import { KorpaService } from 'src/app/korpa/korpa.service';
import { ProdavnicaServis } from 'src/app/welcome/prodavnica.service';
import { Ljubimac } from 'src/app/welcome/ljubimac.model';

//

@Component({
  selector: 'app-macke',
  templateUrl: './macke.component.html',
  styleUrls: ['./macke.component.css']
})
export class MackeComponent {
  
  ljubimac: Ljubimac[] = [];
  
  constructor(private prodavnicaService: ProdavnicaServis, private korpaService: KorpaService) {}
 

  ngOnInit(): void {
    this.ljubimac = this.prodavnicaService.getLjubimac();
  }
  onAddToCart(ljubimac: Ljubimac): void{
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
