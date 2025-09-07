import { Component, EventEmitter, Output } from '@angular/core';
import { ProdavnicaServis } from './prodavnica.service';
import { Ljubimac } from './ljubimac.model';
import { KorpaService } from '../korpa/korpa.service';

//

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
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
     godiste: ljubimac.godiste,
     velicina: ljubimac.velicina,
     cena: ljubimac.cena,
     kolicina: 1
    });
 }
  
}


