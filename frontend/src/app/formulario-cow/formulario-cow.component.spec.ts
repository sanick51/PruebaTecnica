import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCowComponent } from './formulario-cow.component';

describe('FormularioCowComponent', () => {
  let component: FormularioCowComponent;
  let fixture: ComponentFixture<FormularioCowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
