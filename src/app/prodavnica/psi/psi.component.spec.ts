import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiComponent } from './psi.component';

describe('MuskarciComponent', () => {
  let component: PsiComponent;
  let fixture: ComponentFixture<PsiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsiComponent]
    });
    fixture = TestBed.createComponent(PsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
