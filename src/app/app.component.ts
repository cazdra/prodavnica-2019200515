import { Component, OnInit } from '@angular/core';
import { KorisnickiServis } from './autentifikacija/signup/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfilComponent } from './autentifikacija/profil/profil.component';
import { KorpaService } from './korpa/korpa.service';
import { Korpa } from './korpa/korpa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prodavnica';

  profileOpened: boolean = false;

  constructor(public korisnickiServis: KorisnickiServis, public dialog: MatDialog, private korpaService: KorpaService){}

  openProfile(korisnikId: number){
    this.profileOpened = true;
    const profileDialog = this.dialog.open(ProfilComponent, {
      disableClose: true,
      width: '30vw',
      data: { korisnik: this.korisnickiServis.getKorisnikById(korisnikId)}
    });

    profileDialog.afterClosed().subscribe((result) => {
      this.profileOpened = false;
    })
  }

  korpa: Korpa = {items:[]};

  ngOnInit(){
    this.korpaService.korpa.subscribe((_korpa)=>{
      this.korpa = _korpa;
    })
  }

}
