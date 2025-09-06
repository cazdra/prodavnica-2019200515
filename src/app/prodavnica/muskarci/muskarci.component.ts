import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KorpaService } from 'src/app/korpa/korpa.service';
import { ProdavnicaServis } from 'src/app/welcome/prodavnica.service';
import { Proizvod } from 'src/app/welcome/proizvod.model';

@Component({
  selector: 'app-muskarci',
  templateUrl: './muskarci.component.html',
  styleUrls: ['./muskarci.component.css']
})
export class MuskarciComponent implements OnInit{


  proizvod: Proizvod[] = [];

  @Output() addToCart = new EventEmitter();
  
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
