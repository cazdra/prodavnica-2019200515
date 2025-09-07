export interface Korpa {
    items: Array<KorpaLjubimac>;
  }
  
  export interface KorpaLjubimac {
    id: number;
    slika: string;
    ime: string;
    rasa: string;
    velicina: "Small" | "Medium" | "Large";
    godiste: string;
    cena: number;
    status?: "Pristigao" | "U toku"| "Otkazano" | null;
    ocena?: number | null;
    kolicina: number;
  }



