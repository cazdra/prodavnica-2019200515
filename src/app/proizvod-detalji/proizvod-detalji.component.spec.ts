import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodDetaljiComponent } from './proizvod-detalji.component';

describe('ProizvodDetaljiComponent', () => {
  let component: ProizvodDetaljiComponent;
  let fixture: ComponentFixture<ProizvodDetaljiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProizvodDetaljiComponent]
    });
    fixture = TestBed.createComponent(ProizvodDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
