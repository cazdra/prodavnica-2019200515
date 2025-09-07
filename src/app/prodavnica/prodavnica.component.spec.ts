import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdavnicaComponent } from './prodavnica.component';

//

describe('ProdavnicaComponent', () => {
  let component: ProdavnicaComponent;
  let fixture: ComponentFixture<ProdavnicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdavnicaComponent]
    });
    fixture = TestBed.createComponent(ProdavnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
