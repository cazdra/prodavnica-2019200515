import { Component } from '@angular/core';
import { KorpaService } from 'src/app/korpa/korpa.service';
import { ProdavnicaServis } from 'src/app/welcome/prodavnica.service';
import { Proizvod } from 'src/app/welcome/proizvod.model';

@Component({
  selector: 'app-zene',
  templateUrl: './zene.component.html',
  styleUrls: ['./zene.component.css']
})
export class ZeneComponent {
  
  proizvod: Proizvod[] = [];
  
  constructor(private prodavnicaService: ProdavnicaServis, private korpaService: KorpaService) {}
 

  ngOnInit(): void {
    this.proizvod = this.prodavnicaService.getProizvod();
  }
  onAddToCart(proizvod: Proizvod): void{
    this.korpaService.addToCart({
     id: proizvod.id,
     slika: proizvod.slika,
     naziv: proizvod.naziv,
     vrsta: proizvod.vrsta,
     velicina: proizvod.velicina,
     proizvodjac: proizvod.proizvodjac,
     cena: proizvod.cena,
     kolicina: 1
    });
 }
 
  
}
