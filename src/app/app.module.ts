import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ProdavnicaServis } from './welcome/prodavnica.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './autentifikacija/signup/signup.component';
import { LoginComponent } from './autentifikacija/login/login.component';
import { KorisnickiServis } from './autentifikacija/signup/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KorpaComponent } from './korpa/korpa.component';
import { ProfilComponent } from './autentifikacija/profil/profil.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProdavnicaComponent } from './prodavnica/prodavnica.component';
import { PsiComponent } from './prodavnica/psi/psi.component';
import { MackeComponent } from './prodavnica/macke/macke.component';
import { KorpaService } from './korpa/korpa.service';
import { ProizvodDetaljiComponent } from './proizvod-detalji/proizvod-detalji.component';
import { ChatbotComponent } from './chatbot/chatbot.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    KorpaComponent,
    ProfilComponent,
    WelcomeComponent,
    ProdavnicaComponent,
    PsiComponent,
    MackeComponent,
    ProizvodDetaljiComponent,
    ChatbotComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    FlexLayoutModule,

  ],
  providers: [ProdavnicaServis, KorisnickiServis, KorpaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
