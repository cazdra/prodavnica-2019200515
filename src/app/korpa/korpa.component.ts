import { Component, OnInit, ViewChild } from '@angular/core';
import { Korpa, KorpaProizvod } from './korpa.model';
import { KorpaService } from './korpa.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  korpa: Korpa = { items: [] };
  dataSource = new MatTableDataSource<KorpaProizvod>();

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

  getTotal(items: KorpaProizvod[]): number {
    return this.korpaService.getTotal(items);
  }

  onClearCart(): void {
    this.korpaService.clearCart();
  }

  oceniPorudzbinu(porudzbina: KorpaProizvod, ocena: number): void {
    this.korpaService.markItem(porudzbina.id, ocena);
  }

  obrisiPorudzbinu(porudzbina: KorpaProizvod): void {
    this.korpaService.deleteItem(porudzbina);
  }
  
  promeniStatus(id: number, noviStatus: 'Pristigao' | 'U toku' | 'Otkazano'): void {
    this.korpaService.changeStatus(id, noviStatus);
  }
}