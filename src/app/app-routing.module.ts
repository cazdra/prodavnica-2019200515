import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./autentifikacija/signup/signup.component";
import { LoginComponent } from "./autentifikacija/login/login.component";
import { KorpaComponent } from "./korpa/korpa.component";
import { ProfilComponent } from "./autentifikacija/profil/profil.component";
import { ProdavnicaComponent } from "./prodavnica/prodavnica.component";

const rute: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'korpa', component: KorpaComponent},
    { path: 'profil', component: ProfilComponent},
    { path: 'prodavnica', component: ProdavnicaComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(rute)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule {} 