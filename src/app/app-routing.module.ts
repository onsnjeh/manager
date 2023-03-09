import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListExpertComponent } from './list-expert/list-expert.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { NavbarComponent } from './navbar/navbar.component';



const routes: Routes = [
 {path:'',component:DashboardComponent},
 {path:'navbar',component:NavbarComponent},
 {path:'header',component:HeaderComponent},
 {path:'cart',component:CartsComponent},
 {path:'manager/list-article',component:ListArticleComponent},
 {path:'manager/list-ticket',component:ListTicketComponent},
 {path:'manager/list-expert',component:ListExpertComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
