import { Component, Inject, OnInit } from '@angular/core';
import { KorisnickiServis, Korisnik } from '../signup/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

isEditing: boolean = false;
profileForInput!: Korisnik;

constructor(@Inject(MAT_DIALOG_DATA) public data: any, public korisnickiServis: KorisnickiServis){}
ngOnInit(): void{
  this.profileForInput = {
    id:       this.data.korisnik.id,
    email:    this.data.korisnik.email,
    sifra:    this.data.korisnik.sifra,
    adresa:   this.data.korisnik.adresa,
    ime:      this.data.korisnik.ime,
    prezime:  this.data.korisnik.prezime,
    telefon:  this.data.korisnik.telefon,
    oZivotinja: this.data.korisnik.oZivotinja
    
  };
}

finishEditing(form: NgForm){
  this.data.korisnik.email    = this.profileForInput.email;
  this.data.korisnik.sifra = this.profileForInput.sifra;
  this.data.korisnik.adresa  = this.profileForInput.adresa;
  this.data.korisnik.ime  = this.profileForInput.ime;
  this.data.korisnik.prezime  = this.profileForInput.prezime;
  this.data.korisnik.telefon  = this.profileForInput.telefon;
  this.data.korisnik.oZivotinja  = this.profileForInput.oZivotinja;

  this.isEditing = false;

  console.log(KorisnickiServis.dummyKorisnikList);
  console.log(this.data.korisnik);

}

    enableEdit() {
    this.isEditing = !this.isEditing;
}

}
