import { Component } from '@angular/core';
import { KorisnickiServis } from './user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

//

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  errorExists = false;
  errorText = "";

  constructor(private korisnickiServis: KorisnickiServis, private router: Router) {}

  onSubmit(form : NgForm){
    if (!this. korisnickiServis.getKorisnik(form.value.email)) {
      this.errorExists = false;
      var newUser = this. korisnickiServis.registerKorisnik (form.value.ime, form.value.prezime, form.value.email, form.value.sifra, form.value.adresa, form.value.telefon, form.value.oZivotinja);
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "Korisnik sa unetom mejl adresom već postoji."
    }
  }



}
