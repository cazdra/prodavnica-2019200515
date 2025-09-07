import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MackeComponent } from './macke.component';

//

describe('MackeComponent', () => {
  let component: MackeComponent;
  let fixture: ComponentFixture<MackeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MackeComponent]
    });
    fixture = TestBed.createComponent(MackeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
