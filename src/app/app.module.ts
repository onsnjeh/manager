import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CartsComponent } from './carts/carts.component';
import { NbreTicketTotalComponent } from './nbre-ticket-total/nbre-ticket-total.component';
import { NbreTicketOuvertComponent } from './nbre-ticket-ouvert/nbre-ticket-ouvert.component';
import { NbreTicketFermeComponent } from './nbre-ticket-ferme/nbre-ticket-ferme.component';
import { NbreDocumentComponent } from './nbre-document/nbre-document.component';
import { NbreVisiteurComponent } from './nbre-visiteur/nbre-visiteur.component';
import { NbreClientComponent } from './nbre-client/nbre-client.component';
import { NbreExpertComponent } from './nbre-expert/nbre-expert.component';
import { ListTicketDernierComponent } from './list-ticket-dernier/list-ticket-dernier.component';
import { ListArticleDernierComponent } from './list-article-dernier/list-article-dernier.component';
import { DecimalPipe, NgFor } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListExpertDernierComponent } from './list-expert-dernier/list-expert-dernier.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { ListExpertComponent } from './list-expert/list-expert.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BoutonAddDocumentComponent } from './bouton-add-document/bouton-add-document.component';
import { BoutonOpenComponent } from './bouton-open/bouton-open.component';
import { BoutonAffecterExpertComponent } from './bouton-affecter-expert/bouton-affecter-expert.component';
import { BoutonSupprimerTicketComponent } from './bouton-supprimer-ticket/bouton-supprimer-ticket.component';
import { BoutonCloseTicketComponent } from './bouton-close-ticket/bouton-close-ticket.component';
import { TypeComponent } from './type/type.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { NomExpertComponent } from './nom-expert/nom-expert.component';
import { ThemeComponent } from './theme/theme.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { FormsModule } from '@angular/forms';
import { PriorityComponent } from './priority/priority.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    CartsComponent,
    NbreTicketTotalComponent,
    NbreTicketOuvertComponent,
    NbreTicketFermeComponent,
    NbreDocumentComponent,
    NbreVisiteurComponent,
    NbreClientComponent,
    NbreExpertComponent,
    ListTicketDernierComponent,
    ListArticleDernierComponent,
    ListExpertDernierComponent,
    ListArticleComponent,
    ListTicketComponent,
    ListExpertComponent,
    BoutonAddDocumentComponent,
    BoutonOpenComponent,
    BoutonAffecterExpertComponent,
    BoutonSupprimerTicketComponent,
    BoutonCloseTicketComponent,
    ListCategoryComponent,
    ThemeComponent,
    TypeComponent,
    SpecialiteComponent,
    NomExpertComponent,
    PriorityComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DecimalPipe,
     NgFor,
     FormsModule,
     NgbModule,
     NgbCollapseModule,
     NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
