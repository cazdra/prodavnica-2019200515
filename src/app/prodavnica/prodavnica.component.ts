import { Component } from '@angular/core';
import { Proizvod } from '../welcome/proizvod.model';
import { KorpaService } from '../korpa/korpa.service';

@Component({
  selector: 'app-prodavnica',
  templateUrl: './prodavnica.component.html',
  styleUrls: ['./prodavnica.component.css']
})
export class ProdavnicaComponent {

constructor(private korpaService: KorpaService){}


  
}
