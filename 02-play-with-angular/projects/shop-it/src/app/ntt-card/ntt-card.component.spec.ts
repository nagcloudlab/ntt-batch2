import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NttCardComponent } from './ntt-card.component';

describe('NttCardComponent', () => {
  let component: NttCardComponent;
  let fixture: ComponentFixture<NttCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NttCardComponent]
    });
    fixture = TestBed.createComponent(NttCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
