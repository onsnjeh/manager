import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonSupprimerTicketComponent } from './bouton-supprimer-ticket.component';

describe('BoutonSupprimerTicketComponent', () => {
  let component: BoutonSupprimerTicketComponent;
  let fixture: ComponentFixture<BoutonSupprimerTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonSupprimerTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonSupprimerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
