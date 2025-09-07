import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { KorisnickiServis } from '../signup/user.service';

//

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorExists = false;
  errorText = "";

  constructor(private korisnickiServis: KorisnickiServis, private router: Router){}
  onSubmit(form: NgForm) {

    var email = form.value.email;
    var password = form.value.password;

    var user = this.korisnickiServis.getKorisnik(email);

    if(!user) {
      this.errorExists = true;
      this.errorText = "Ne postoji korisnik sa unetom mejl adresom.";
      return;
    }

    var isPasswordValid = this.korisnickiServis.isPasswordCorrect(email, password);

    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Netacna lozinka."
      return;
    }

    this.errorExists = false;
    this.router.navigate(['']);

  }
}
