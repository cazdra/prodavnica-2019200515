export interface Korpa {
    items: Array<KorpaProizvod>;
  }
  
  export interface KorpaProizvod {
    id: number;
    slika: string;
    naziv: string;
    vrsta: string;
    velicina: "S" | "M" | "L" | "XL" | "XXL" | null;
    proizvodjac: string;
    cena: number;
    status?: "Pristigao" | "U toku"| "Otkazano" | null;
    kolicina: number;
  }