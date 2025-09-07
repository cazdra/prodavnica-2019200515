import { Injectable } from "@angular/core";
import { Ljubimac } from "./ljubimac.model";

@Injectable()
export class ProdavnicaServis {
    private ljubimac: Ljubimac[] = [
        {
            id: 1,
            ime: "Bobi",
            slika: "https://moj-ljubimac.rs/wp-content/uploads/2021/09/Maltezer-sedi.jpg",
            rasa: "Maltezer",
            velicina: "Small",
            godiste: "03.07.2025",
            cena: 25000,
            rod: "Mužjak",
            kolicina: 1,
            opis: "Maltezeri su poznati po svojoj beloj, svilenkastoj dlaci i razigranom karakteru. Veoma su druželjubivi i savršeni za porodično okruženje. Životni vek im je između 12 i 15 godina."
        },
        {
            id: 2,
            slika: "https://www.woefkesranch.be/wp-content/uploads/2023/02/Maltipoo-reu-2018-1-1.jpg.webp",
            ime: "Beni",
            rasa: "Malti pu",
            godiste: "12.08.2025",
            velicina: "Small",
            cena: 47000,
            rod: "Mužjak",
            kolicina: 1,
            opis: "Malti pu je mešanac maltezera i pudle, poznat po hipoalergenskoj dlaci. Inteligentan je, nežan i lako se dresira. Životni vek im je između 10 i 13 godina."
        },
        {
            id: 3,
            slika: "https://img.goglasi.com/img/284354184",
            ime: "Nala",
            rasa: "Pit bull",
            velicina: "Large",
            godiste: "18.08.2025",
            kolicina: 1,
            rod: "Ženka",
            cena: 22000,
            opis: "Pit bulovi su snažni i odani psi, puni energije. Uz pravilnu socijalizaciju, postaju izuzetno nežni i zaštitnički nastrojeni. Životni vek im je između 8 i 15 godina."
        },
        {
            id: 4,
            slika: "https://www.kupujemprodajem.com/photos/oglasi/0/93/150751930/150751930_651e7389a3c3d4-03302097image.webp",
            ime: "Nea",
            rasa: "Staford",
            velicina: "Large",
            godiste: "14.07.2025",
            cena: 20000,
            rod: "Ženka",
            kolicina: 1,
            opis: "Američki Stafordski Terijeri su inteligentni i hrabri psi. Izuzetno su privrženi svojim vlasnicima i dobri su sa decom. Životni vek im je između 12 i 16 godina."
        },
        {
            id: 5,
            slika: "https://img.halooglasi.com/slike/oglasi/Thumbs/231120/m/bernski-pastirski-pas-stene-5425643904869-71806385800.jpg",
            ime: "Koko",
            rasa: "Bernski planinski",
            velicina: "Large",
            godiste: "22.06.2025",
            cena: 32000,
            rod: "Mužjak",
            kolicina: 1,
            opis: "Bernski planinski psi su dobroćudni, mirni i strpljivi. Smatraju se savršenim porodičnim ljubimcima zbog svoje blage naravi. Životni vek im je između 7 i 10 godina."
        },
        {
            id: 6,
            slika: "https://img.halooglasi.com/slike/oglasi/Thumbs/240703/m/kovrdzavi-bison-stene-5425644598251-71808733500.jpg",
            ime: "Moli",
            rasa: "Bišon",
            velicina: "Small",
            godiste: "22.08.2025",
            cena: 36000,
            rod: "Ženka",
            kolicina: 1,
            opis: "Bišoni su veseli i razigrani psi, poznati po svojoj beloj, kovrdžavoj dlaci. Savršeni su za život u stanu i veoma su privrženi. Životni vek im je između 12 i 15 godina."
        },
        {
            id: 7,
            slika: "https://www.oglasnik.hr/repository/images/_var/2/9/297041e4eaa257392a1d979842d00ac0ba062d12-GalleryBig.jpg",
            ime: "Bono",
            rasa: "Chau Chau",
            velicina: "Large",
            godiste: "12.06.2025",
            kolicina: 1,
            rod: "Mužjak",
            cena: 47500,
            opis: "Chau Chau je pas snažne građe, poznat po karakterističnom plavom jeziku. Nezavisni su i lojalni, ali traže čvrstu dresuru. Životni vek im je između 9 i 15 godina."
        },
        {
            id: 8,
            slika: "https://res.cloudinary.com/wuuff/image/private/h_225,w_275,c_fill,g_center,q_auto,f_auto/duappfacyyxzvlznsfwm.webp",
            ime: "Megi",
            rasa: "Jazavičar",
            velicina: "Medium",
            godiste: "01.09.2025",
            cena: 19000,
            rod: "Ženka",
            kolicina: 1,
            opis: "Jazavičari su mali psi sa velikom ličnošću. Poznati su po svojoj radoznalosti i hrabrosti, a njihov duguljast oblik tela ih čini jedinstvenim. Životni vek im je između 12 i 16 godina."
        },
        {
            id: 9,
            slika: "https://mypets.rs/wp-content/uploads/2024/04/2-civava-VB0424.jpg",
            ime: "Ken",
            rasa: "Čivava",
            velicina: "Small",
            godiste: "22.05.2025",
            kolicina: 1,
            rod: "Mužjak",
            cena: 54000,
            opis: "Čivave su najmanji psi na svetu. Energične su, odvažne i izuzetno privržene svojim vlasnicima, idealne za život u stanu. Životni vek im je između 12 i 20 godina."
        },
        {
            id: 10,
            slika: "https://img.halooglasi.com/slike/oglasi/Thumbs/241014/m/velski-korgi-pembrok-stene-5425644880171-71809699622.jpg",
            ime: "Laki",
            rasa: "Korgi",
            velicina: "Medium",
            godiste: "01.07.2025",
            cena: 79000,
            rod: "Mužjak",
            kolicina: 1,
            opis: "Korgiji su poznati po svojoj inteligenciji, snažnom karakteru i kratkim nogama. Lako se dresiraju i odlični su porodični psi. Životni vek im je između 12 i 15 godina."
        },
        {
            id: 11,
            slika: "https://www.zooplus.hr/magazin/wp-content/uploads/2022/09/macic-americke-kratkodlake-macke.webp",
            ime: "Mila",
            rasa: "Americka Kratkodlaka",
            velicina: "Medium",
            godiste: "12.06.2025",
            cena: 22700,
            rod: "Ženka",
            kolicina: 1,
            opis: "Američke kratkodlake mačke su mirne i lako se prilagođavaju životu u zatvorenom prostoru. Druželjubive su i uživaju u igri. Životni vek im je između 15 i 20 godina."
        },
        {
            id: 12,
            slika: "https://img.halooglasi.com/slike/oglasi/Thumbs/240528/m/maine-coon-mace-5425644495733-71808367334.jpg",
            ime: "Zox",
            rasa: "Maine Coon",
            velicina: "Large",
            godiste: "02.09.2025",
            cena: 92000,
            rod: "Mužjak",
            kolicina: 1,
            opis: "Maine Coon su velike, nežne mačke sa gustim krznom. Poznate su po inteligenciji i razigranosti, idealne za život sa porodicom. Životni vek im je između 12 i 15 godina."
        },
        {
            id: 13,
            slika: "https://uraditozasebe.rs/wp-content/uploads/2023/09/sekta-33-1024x599.jpg",
            ime: "Nuri",
            rasa: "Egipatski mau",
            velicina: "Small",
            godiste: "11.08.2025",
            cena: 43200,
            rod: "Mužjak",
            kolicina: 1,
            opis: "Egipatski mau su mačke sa prelepim pegavim krznom. Aktivne su, znatiželjne i vole igru, a imaju i blagu narav. Životni vek im je između 9 i 13 godina."
        },
        {
            id: 14,
            slika: "https://puntomarinero.com/images/turkish-angora-character-care-and_4.jpg",
            ime: "Sani",
            rasa: "Turska Angora",
            velicina: "Medium",
            godiste: "09.08.2025",
            kolicina: 1,
            rod: "Ženka",
            cena: 92000,
            opis: "Turske Angore su elegantne mačke sa svilenkastom dlakom. Razigrane su, inteligentne i veoma privržene svojim vlasnicima. Životni vek im je između 12 i 18 godina."
        },
        {
            id: 15,
            slika: "https://mojljubimac.info/wp-content/uploads/2019/01/cute-3252251_1280.jpg",
            ime: "Lili",
            rasa: "Sijamska",
            velicina: "Medium",
            godiste: "22.05.2025",
            cena: 27000,
            rod: "Ženka",
            kolicina: 1,
            opis: "Sijamske mačke su poznate po svojoj inteligenciji, društvenosti i specifičnom mjaukanju. Veoma su aktivne i vole da su u centru pažnje. Životni vek im je između 14 i 20 godina."
        },
        {
            id: 16,
            ime: "Kajk",
            slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXd4XEn5VybLa5jLmyHMN8Q_mrMem03_bhFg&s",
            rasa: "Sfinks",
            velicina: "Small",
            godiste: "19.07.2025",
            cena: 67000,
            rod: "Mužjak",
            kolicina: 1,
            opis: "Sfinks mačke su prepoznatljive po odsustvu krzna. One su nežne, inteligentne i izuzetno privržene, idealne za one koji žele jedinstvenog ljubimca. Životni vek im je između 6 i 9 godina."
        },
        {
            id: 17,
            slika: "https://www.purina.rs/sites/default/files/styles/ttt_image_510/public/2021-02/CAT%20BREED%20Hero%20Mobile_0012_Russian_blue.jpg?itok=HogqLOd0",
            ime: "Jan",
            rasa: "Ruska plava",
            velicina: "Medium",
            godiste: "01.07.2025",
            cena: 39300,
            rod: "Mužjak",
            kolicina: 1,
            opis: "Ruske plave mačke su mirne i tihe, poznate po elegantnoj sivoj dlaci. Veoma su lojalne i nežne prema svojim vlasnicima. Životni vek im je između 9 i 20 godina."
        },
        {
            id: 18,
            slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmw7lHXUbvIWpGLy_tXoFeX3hXpxF7PqGqQ&s",
            ime: "Blun",
            rasa: "Himalajska",
            velicina: "Large",
            godiste: "30.06.2025",
            kolicina: 1,
            rod: "Mužjak",
            cena: 84000,
            opis: "Himalajske mačke su mešavina persijskih i sijamskih, sa dugim krznom i prelepim plavim očima. Mirne su i nežne, idealne za život u zatvorenom. Životni vek im je između 9 i 15 godina."
        },
        {
            id: 19,
            slika: "https://www.njuskalo.hr/image-xlsize/udomljavanje-macaka/balineska-macka-muzjak-slika-177176659.jpg",
            ime: "Loko",
            rasa: "Balineska",
            velicina: "Medium",
            godiste: "31.08.2025",
            kolicina: 1,
            rod: "Mužjak",
            cena: 79000,
            opis: "Balineske mačke su inteligentne i elegantne. Poznate su po svojoj komunikativnosti i razigranosti, slične sijamskim mačkama. Životni vek im je između 15 i 20 godina."
        },
        {
            id: 20,
            slika: "https://mezimci.rs/images/races/persijska.jpg",
            ime: "Neo",
            rasa: "Persijska",
            velicina: "Medium",
            godiste: "31.06.2025",
            rod: "Mužjak",
            cena: 46000,
            kolicina: 1,
            opis: "Persijske mačke su poznate po svom dugom krznu i mirnoj naravi. Vole da se maze i savršene su za miran porodični život. Životni vek im je između 12 i 15 godina."
        }
    ];
    getLjubimac() {
        return this.ljubimac;
    }
}