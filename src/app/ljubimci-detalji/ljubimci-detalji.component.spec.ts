import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjubimciDetaljiComponent } from './ljubimci-detalji.component';

//

describe('LjubimciDetaljiComponent', () => {
  let component: LjubimciDetaljiComponent;
  let fixture: ComponentFixture<LjubimciDetaljiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LjubimciDetaljiComponent]
    });
    fixture = TestBed.createComponent(LjubimciDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
