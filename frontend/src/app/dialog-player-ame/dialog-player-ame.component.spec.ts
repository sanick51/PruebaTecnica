import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlayerAmeComponent } from './dialog-player-ame.component';

describe('DialogPlayerAmeComponent', () => {
  let component: DialogPlayerAmeComponent;
  let fixture: ComponentFixture<DialogPlayerAmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPlayerAmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlayerAmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
