import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCloseTicketComponent } from './bouton-close-ticket.component';

describe('BoutonCloseTicketComponent', () => {
  let component: BoutonCloseTicketComponent;
  let fixture: ComponentFixture<BoutonCloseTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonCloseTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonCloseTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
