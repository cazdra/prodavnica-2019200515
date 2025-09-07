import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KorisnickiServis } from './autentifikacija/signup/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfilComponent } from './autentifikacija/profil/profil.component';
import { KorpaService } from './korpa/korpa.service';
import { Korpa } from './korpa/korpa.model';

//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'prodavnica';
  profileOpened: boolean = false;
  korpa: Korpa = { items: [] };

  isChatbotVisible: boolean = false;

  constructor(
    public korisnickiServis: KorisnickiServis,
    public dialog: MatDialog,
    private korpaService: KorpaService,
  ) {}

  ngOnInit() {
    this.korpaService.korpa.subscribe((_korpa) => {
      this.korpa = _korpa;
    });
  }

  toggleChatbot(): void {
    this.isChatbotVisible = !this.isChatbotVisible;
  }

  openProfile(korisnikId: number) {
    this.profileOpened = true;
    const profileDialog = this.dialog.open(ProfilComponent, {
      disableClose: true,
      width: '30vw',
      data: { korisnik: this.korisnickiServis.getKorisnikById(korisnikId) }
    });

    profileDialog.afterClosed().subscribe(() => {
      this.profileOpened = false;
    });
  }
}