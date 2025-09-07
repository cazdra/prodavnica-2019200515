

export interface Proizvod {

    id: number;
    slika: string;
    ime: string;
    rasa: "Maltezer"| "Korgi"| "Staford" | "Bernski planinski"| "Pit bull" | "Čivava" | 
    "Chau Chau" | "Bišon" | "Jazavičar" | "Malti pu" | "Ruska plava" | "Sijamska" | 
    "Maine Coon" | "Persijska" | "Americka Kratkodlaka" | "Sfinks" | "Balineska" | 
    "Turska Angora" | "Himalajska" | "Egipatski mau";
    velicina: "Small" | "Medium" | "Large";
    godiste: string;
    rod: "Mužjak" | "Ženka";
    cena: number;
    opis: string;
    status?: "Dostavljeno" | "U toku"| "Otkazano" | null;
    ocena?: number | null;
    kolicina?: number;
    }