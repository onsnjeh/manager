import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonAffecterExpertComponent } from './bouton-affecter-expert.component';

describe('BoutonAffecterExpertComponent', () => {
  let component: BoutonAffecterExpertComponent;
  let fixture: ComponentFixture<BoutonAffecterExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonAffecterExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonAffecterExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
