import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuskarciComponent } from './muskarci.component';

describe('MuskarciComponent', () => {
  let component: MuskarciComponent;
  let fixture: ComponentFixture<MuskarciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuskarciComponent]
    });
    fixture = TestBed.createComponent(MuskarciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
