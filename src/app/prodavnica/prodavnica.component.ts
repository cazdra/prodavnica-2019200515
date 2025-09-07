import { Component } from '@angular/core';
import { Ljubimac } from '../welcome/ljubimac.model';
import { KorpaService } from '../korpa/korpa.service';

//

@Component({
  selector: 'app-prodavnica',
  templateUrl: './prodavnica.component.html',
  styleUrls: ['./prodavnica.component.css']
})
export class ProdavnicaComponent {

constructor(private korpaService: KorpaService){}


  
}
