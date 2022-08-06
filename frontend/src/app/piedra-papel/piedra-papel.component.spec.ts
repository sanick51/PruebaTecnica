import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapelComponent } from './piedra-papel.component';

describe('PiedraPapelComponent', () => {
  let component: PiedraPapelComponent;
  let fixture: ComponentFixture<PiedraPapelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedraPapelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
