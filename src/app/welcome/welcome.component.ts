import { Component, EventEmitter, Output } from '@angular/core';
import { ProdavnicaServis } from './prodavnica.service';
import { Proizvod } from './proizvod.model';
import { KorpaService } from '../korpa/korpa.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  proizvod: Proizvod[] = [];
  
  constructor(private prodavnicaService: ProdavnicaServis, private korpaService: KorpaService) {}

  ngOnInit(): void {
    this.proizvod = this.prodavnicaService.getProizvod();
  }
  onAddToCart(proizvod: Proizvod): void{
    this.korpaService.addToCart({
     id: proizvod.id,
     slika: proizvod.slika,
     ime: proizvod.ime,
     rasa: proizvod.rasa,
     godiste: proizvod.godiste,
     velicina: proizvod.velicina,
     cena: proizvod.cena,
     kolicina: 1
    });
 }
  
}


