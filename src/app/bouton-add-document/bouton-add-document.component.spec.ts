import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonAddDocumentComponent } from './bouton-add-document.component';

describe('BoutonAddDocumentComponent', () => {
  let component: BoutonAddDocumentComponent;
  let fixture: ComponentFixture<BoutonAddDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonAddDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonAddDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
