

export interface Proizvod {

    id: number;
    slika: string;
    naziv: string;
    vrsta: "Majica"| "Pantalone"| "Farmerke" | "Jakna"| "Džemperi" | "Aksesoari" | "Haljina" | "Suknje" | "Komplet" ;
    velicina: "S" | "M" | "L" | "XL" | "XXL" | null;
    proizvodjac: string;
    cena: number;
    status?: "Dostavljeno" | "U toku"| "Otkazano" | null;
    kolicina?: number;
    }