import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovodispositivoComponent } from './novodispositivo.component';

describe('NovodispositivoComponent', () => {
  let component: NovodispositivoComponent;
  let fixture: ComponentFixture<NovodispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovodispositivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovodispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
