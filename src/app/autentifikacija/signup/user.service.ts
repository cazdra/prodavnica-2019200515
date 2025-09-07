import { Injectable } from "@angular/core";

export interface Korisnik {
    id: number;
    ime: string;
    prezime: string;
    email: string;
    sifra: string;
    telefon: string;
    adresa: string;
    oZivotinja: string;
}

@Injectable()
export class KorisnickiServis {

    trenutniKorisnik: Korisnik = KorisnickiServis.dummyKorisnikList[0];


    static dummyKorisnikList: Array <Korisnik> = [
        {
            id: 1,
            ime: "Petar",
            prezime: "Petrovic",
            email: "petarpetrovic@gmail.com",
            sifra: 'petrovic12345',
            telefon: "123456122",
            adresa: "Steve Todorovica 32",
            oZivotinja: "Pas",
        },
        {
            id: 2,
            ime: "Nikola",
            prezime: "Nikolic",
            email: "nnikolic@gmail.com",
            sifra: "nikolic12345",
            telefon: "12345678",
            adresa: "Terazijska 4",
            oZivotinja: "Macka",
        },
        {
            id: 3,
            ime: "Marko",
            prezime: "Markovic",
            email: "markomarkovic@gmail.com",
            sifra: "markovic12345",
            telefon: "124256366",
            adresa: "Strumicka BB",
            oZivotinja: "Pas",
        },
        {
            id: 4,
            ime: "Stefan",
            prezime: "Stefanovic",
            email: "stefanstefanovic@gmail.com",
            sifra: "stefanovic12345",
            telefon: "333444777",
            adresa: "nemanjina 50",
            oZivotinja: "Pas",
        },
        {
            id: 5,
            ime: "Jovana",
            prezime: "Jovanovic",
            email: "jovanajovanovic@singimail.com",
            sifra: "jovanoci12345",
            telefon: "44567789",
            adresa: "Ustanicka 60A",
            oZivotinja: "Macka",
        },
        {
            id: 6,
            ime: "Ana",
            prezime: "Jovanovic",
            email: "ajovanovic@gmail.com",
            sifra: "jovanovic12345",
            telefon: "123456789",
            adresa: "Visnjicka 25",
            oZivotinja: "Macka",
        },
        {
            id: 7,
            ime: "Tamara",
            prezime: "Nikolic",
            email: "tamaranikolic@gmail.com",
            sifra: "popovic12345",
            telefon: "345678960",
            adresa: "Braca Jerkovic 4",
            oZivotinja: "Macka",
        },
        {
            id: 8,
            ime: "Ana",
            prezime: "Antic",
            email: "anaantic@gmail.com",
            sifra: "ana12345",
            telefon: "551256613",
            adresa: "Gospodara Vucica 1",
            oZivotinja: "Pas",
        },
        {
            id: 9,
            ime: "Milena",
            prezime: "Milic",
            email: "milenamilic@gmail.com",
            sifra: "milic12345",
            telefon: "123765098",
            adresa: "Vojvodjanska 37",
            oZivotinja: "Macka",
        },
        {
            id: 10,
            ime: "Zdravko",
            prezime: "Andan",
            email: "andanzdravko10@gmail.com",
            sifra: "singidunum1",
            telefon: "0631645343",
            adresa: "",
            oZivotinja: "Pas",
        },
      ];

        getKorisnikName(korisnik: Korisnik): string {
            return korisnik.email;
        }
    
        getKorisnikById(id: number): Korisnik {
            var foundKorisnik!: Korisnik;
            KorisnickiServis.dummyKorisnikList.forEach(korisnik => {
                if (korisnik.id == id) {
                    foundKorisnik = korisnik;
                }
            });
            return foundKorisnik;
        }
    
        getKorisnik(korisnikEmail: string): Korisnik {
            this.trenutniKorisnik = KorisnickiServis.dummyKorisnikList.find(korisnikToFind => korisnikToFind.email == korisnikEmail)!;
            return this.trenutniKorisnik
        }
    
        isPasswordCorrect(korisnikEmail: string, sifra: string): boolean {
            return KorisnickiServis.dummyKorisnikList.find(korisnikToFind => (korisnikToFind.email == korisnikEmail && korisnikToFind.sifra == sifra)) != undefined;
        }
    
        registerKorisnik(ime:string, prezime:string, email: string, sifra: string,  adresa:string, telefon:string, oZivotinja: string): Korisnik {
            var maxId: number = 0;
            KorisnickiServis.dummyKorisnikList.forEach(korisnik => {
                if (maxId < korisnik.id) {
                    maxId = korisnik.id
                }
            });
    
            var id = ++maxId;
            var korisnik: Korisnik = { id, ime, prezime, email, sifra, adresa, telefon, oZivotinja  };
    
            KorisnickiServis.dummyKorisnikList.push(korisnik);
    
            console.log(korisnik);
            return korisnik;
        }
    }













