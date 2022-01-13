import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovacategoriaComponent } from './novacategoria.component';

describe('NovacategoriaComponent', () => {
  let component: NovacategoriaComponent;
  let fixture: ComponentFixture<NovacategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovacategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovacategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
