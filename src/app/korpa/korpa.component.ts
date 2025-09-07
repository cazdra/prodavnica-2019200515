import { Component, OnInit, ViewChild } from '@angular/core';
import { Korpa, KorpaLjubimac } from './korpa.model';
import { KorpaService } from './korpa.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

//

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  korpa: Korpa = { items: [] };
  dataSource = new MatTableDataSource<KorpaLjubimac>();

  displayedColumns: string[] = [
    'slika',
    'rasa',
    'velicina',
    'kolicina',
    'cena',
    'ukupno',
    'status', 
    'action'
  ];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private korpaService: KorpaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.korpaService.korpa.subscribe((_korpa) => {
      this.korpa = _korpa;
      this.dataSource.data = this.korpa.items;
      this.dataSource.sort = this.sort;
    });
  }

  getTotal(items: KorpaLjubimac[]): number {
    return this.korpaService.getTotal(items);
  }

  onClearCart(): void {
    this.korpaService.clearCart();
  }

  oceniPorudzbinu(porudzbina: KorpaLjubimac, ocena: number): void {
    this.korpaService.markItem(porudzbina.id, ocena);
  }

  obrisiPorudzbinu(porudzbina: KorpaLjubimac): void {
    this.korpaService.deleteItem(porudzbina);
  }
  
  promeniStatus(id: number, noviStatus: 'Pristigao' | 'U toku' | 'Otkazano'): void {
    this.korpaService.changeStatus(id, noviStatus);
  }
}