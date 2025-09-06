import { Injectable } from "@angular/core";
import { Proizvod } from "./proizvod.model";

@Injectable()
export class ProdavnicaServis {
        private proizvod: Proizvod[]=[

{
    id: 1,
    naziv: "Jakna",
    slika: "https://rs.beosport.com/media/catalog/product/cache/62e035a19ec38f27c8237d0c2b219b9a/M/5/M5011212A_NWI-01_1_1.jpg",
    vrsta: "Jakna",
    velicina: "S",
    proizvodjac: "SuperDRY",
    cena: 9999,
    kolicina: 1
},
{
    id: 2,
    slika: "https://www.sparrow-world.rs/image/cache/catalog/proizvodi/1005/1500x1500-MAJICA-POLO-MUSKA-tamno-siva-(1)-1000x1000.jpg",
    naziv: "Muska majica",
    vrsta: "Majica",
    velicina: "M",
    proizvodjac: "Sparrow",
    cena: 1000,
    kolicina: 1
},
{
    id: 3,
    slika: "https://www.n-sport.net/UserFiles/products/big/02/23/muska-majica-calvin-klein-seasonal-monogram-t-shirt-J30J320806-0GK.jpg",
    naziv: "Muska majica",
    vrsta: "Majica",
    velicina: "M",
    proizvodjac: "Calven Klein",
    kolicina: 1,
    cena: 2500
},

{
    id: 4,
    slika: "https://www.movem.rs/images/products/HB50530640-404-1.jpg",
    naziv: "Muske Pantalone",
    vrsta: "Pantalone",
    velicina: "M",
    proizvodjac: "Don Denim",
    cena: 4320,
    kolicina: 1
},

{
    id: 5,
    slika: "https://atriumfashion.rs/wp-content/uploads/2024/03/pantalone-2.jpg",
    naziv: "Muske pantalone",
    vrsta: "Pantalone",
    velicina: "L",
    proizvodjac: "Elegant For You",
    cena: 7770,
    kolicina: 1
},
{
    id: 6,
    slika: "https://www.maxairsoft.com/getimage/products/5908218768352a.jpg",
    naziv: "Kratke pantalone",
    vrsta: "Pantalone",
    velicina: "S",
    proizvodjac: "Casual Wear",
    cena: 5110,
    kolicina: 1
},

{
    id: 7,
    slika: "https://www.armyshop.rs/wp-content/uploads/2022/09/dzemper-commando-2.jpeg",
     naziv: "Muski Džemper", 
    vrsta: "Džemperi", 
    velicina: "L", 
    proizvodjac: "Fashion World", 
    kolicina: 1,
    cena: 5410 
},

{
    id: 8,
    slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81dXZzuGGuZP3IzxbBsWHfVPC3TB9nOK_Tg&s",
    naziv: "Čarape",
    vrsta: "Aksesoari",
    velicina: "M",
    proizvodjac: "Adidas",
    cena: 870,
    kolicina: 1
  },

  {
    id: 9,
    slika: "https://www.n-sport.net/UserFiles/products/big/08/08/muske-farmerke-calvin-klein-slim-taper-J30J325889-1A4.jpg",
    naziv: "Muske Farmerke",
    vrsta: "Pantalone",
    velicina: "L",
    proizvodjac: "Calvine Klein",
    kolicina: 1,
    cena: 4350
    
  },

  {
    id: 10,
    slika: "https://extremejeans-beograd.rs/wp-content/uploads/2022/04/Teksas-jakna.jpg",
    naziv: "Muska Teksas jakna",
    vrsta: "Jakna",
    velicina: "L",
    proizvodjac: "DenimCraft",
    cena: 8510,
    kolicina: 1
  },
  {
    id: 11,
    slika: "https://www.movem.rs/images/products/HB50529723-001-1.jpg",
    naziv: "Muski Kaput",
    vrsta: "Jakna",
    velicina: "M",
    proizvodjac: "OnSTyle",
    cena: 6965,
    kolicina: 1

  },
  {
    id: 12,
    slika: "https://www.koznejaknelaforce.rs/wp-content/uploads/2024/04/1LAFORCE_000148-Kozna-jakna-Boris-Crna-1.jpg",
    naziv: "Muska kozna jakna",
    vrsta: "Jakna",
    velicina: "L",
    proizvodjac: "La Force",
    cena: 9999,
    kolicina: 1

  },
  
  {
    id: 13,
    slika: "https://www.sunrise.rs/wp-content/uploads/2020/12/ACA_9133.jpg",
    naziv: "Majica dugih rukava",
    vrsta: "Majica",
    velicina: "M",
    proizvodjac: "SweatStyle",
    cena: 1435,
    kolicina: 1

  },

  {
    id: 14,
    slika: "https://www.safetyshop.rs/media/catalog/product/cache/a011ec81d47f9fbb787b543ed0d4661c/a/l/al-od-004-svetlo-plava.jpg",
    naziv: "Muska Polo majica",
    vrsta: "Majica",
    velicina: "XL",
    proizvodjac: "PoloStyle",
    kolicina: 1,
    cena: 2990
  },
  {
    id: 15,
    slika: "https://www.n-sport.net/UserFiles/products/big/02/21/muska-trenerka-puma-individualrise-tracksuit-657534-03.jpg",
    naziv: "Muska Trenerka",
    vrsta: "Komplet",
    velicina: "L",
    proizvodjac: "Puma",
    cena: 5000,
    kolicina: 1

  },
  {
    id: 16,
    naziv: "Zenska majica",
    slika: "https://www.sparrow-world.rs/image/cache/catalog/proizvodi/1004/1500x1500-MAJICA-S-P-ZENSKA-pink-1000x1000.jpg",
    vrsta: "Majica",
    velicina: "M",
    proizvodjac: "Sparrow World",
    cena: 2100,
    kolicina: 1
},
{
    id: 17,
    slika: "https://vp.lacuna.rs/wand/Content/slike/tsrlcmfgm.jpg?width=700&height=700&scale=both&mode=pad- ",
    naziv: "Zenska majica",
    vrsta: "Majica",
    velicina: "M",
    proizvodjac: "Hugo Boss",
    cena: 800,
    kolicina: 1

},
{
    id: 18,
    slika: "https://cameleon.rs/wp-content/uploads/2022/12/Zenska-bluza-J1BL3597-1.jpg",
    naziv: "Bluza",
    vrsta: "Majica",
    velicina: "L",
    proizvodjac: "Polo",
    kolicina: 1,
    cena: 1300,
},

{
    id: 19,
    slika: "https://cdn.ddgfashion.rs/w/643/h/857/media/ddgrs_products/40766/14079446_Black_All_over_print2.jpeg",
    naziv: "Zenske pantalone",
    vrsta: "Pantalone",
    velicina: "M",
    proizvodjac: "Denim Experts",
    kolicina: 1,
    cena: 2720
},

{
    id: 20,
    slika: "https://shooter.rs/images/product/large2/0uo--ZS-18260-02-TEGET.jpg",
    naziv: "Suknja",
    vrsta: "Suknje",
    velicina: "L",
    proizvodjac: "Elegant Styles",
    cena: 2500,
    kolicina: 1

},
{
    id: 21,
    slika: "https://www.n-sport.net/UserFiles/products/big/05/10/zenski-sorc-marx-BRIAJ804129-BJ.jpg",
    naziv: "Kratke pantalone",
    vrsta: "Pantalone",
    velicina: "S",
    proizvodjac: "Casual Wear",
    kolicina: 1,
    cena: 1430
},

{
    id: 22,
    slika: "https://pullover.rs/image/cache/catalog/zisuki%20kopcanje/Zenski-dzemper-drap-1653-500x666.jpg",
     naziv: "Zenski Džemper", 
    vrsta: "Džemperi", 
    velicina: "XL", 
    proizvodjac: "Fashion World", 
    kolicina: 1,
    cena: 3330 
},

{
    id: 23,
    slika: "https://www.sparrow-world.rs/image/cache/wp/gj/proizvodi/1002/1500x1500-MAJICA-S-P-ZENSKA-tirkiz-2000x2000.webp",
    naziv: "Zenska majica",
    vrsta: "Majica",
    velicina: "L",
    proizvodjac: "SockMasters",
    cena: 500,
    kolicina: 1

  },

  {
    id: 24,
    slika: "https://www.avangardia.rs/files/thumbs/files/images/slike_proizvoda/thumbs_800/764795-200460-Ligth-Blue-Denim_800_1120px.jpg.webp",
    naziv: "Zenske Farmerke",
    vrsta: "Pantalone",
    velicina: "L",
    proizvodjac: "Jeans Unlimited",
    kolicina: 1,
    cena: 2800
  },

  {
    id: 25,
    slika: "https://www.stim-shop.com/wp-content/uploads/2020/05/%C5%BDenska-majica-dugih-rukava-pepeljaste-boje.jpg",
    naziv: "Majica dugih rukava",
    vrsta: "Majica",
    velicina: "M",
    proizvodjac: "SweatStyle",
    cena: 2490,
    kolicina: 1
    ,
  },

  {
    id: 26,
    slika: "https://www.avangardia.rs/files/thumbs/files/images/slike_proizvoda/thumbs_800/768684-200453-Black-Mix_800_1120px.jpg.webp",
    naziv: "Zenski Kaput",
    vrsta: "Jakna",
    velicina: "M",
    proizvodjac: "StyleMasters",
    cena: 9490,
    kolicina: 1

  },
  {
    id: 27,
    slika: "https://www.movem.rs/images/products/HB50524624-001-1.jpg",
    naziv: "Zenska jakna",
    vrsta: "Jakna",
    velicina: "L",
    proizvodjac: "Hugo Boss",
    cena: 9999,
    kolicina: 1
  },
  {
    id: 28,
    slika: "https://www.armyshop.rs/wp-content/uploads/2022/09/britt1.png",
    naziv: "Zimska zenska jakna",
    vrsta: "Jakna",
    velicina: "L",
    proizvodjac: "Army Shop",
    cena: 7000,
    kolicina: 1

  },
  {
    id: 29,
    slika: "https://www.n-sport.net/UserFiles/products/big/04/03/zenska-majica-replay-3698P23608P-066.jpg",
    naziv: "Zenska majica",
    vrsta: "Majica",
    velicina: "XL",
    proizvodjac: "Replay",
    cena: 3200,
    kolicina: 1

  },
  {
    id: 30,
    slika: "https://www.sparrow-world.rs/image/cache/catalog/proizvodi/3002/1500x1500-TRENERKA-NORMAL-ZENSKA-cigla-1000x1000.jpg",
    naziv: "Zenska Trenerka",
    vrsta: "Pantalone",
    velicina: "L",
    proizvodjac: "SportWear",
    cena: 1980,
    kolicina: 1

  },


]
    getProizvod() {
    return this.proizvod;
}
}