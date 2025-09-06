import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeneComponent } from './zene.component';

describe('ZeneComponent', () => {
  let component: ZeneComponent;
  let fixture: ComponentFixture<ZeneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZeneComponent]
    });
    fixture = TestBed.createComponent(ZeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
