import { Component } from '@angular/core';
import { document } from '../model/document.model';
import { expert } from '../model/expert.model';
import { ticket } from '../model/ticket.model';
import { DocumentService } from '../services/document-services/document.service';
import { ExpertService } from '../services/expert-services/expert.service';
import { TicketService } from '../services/ticket-services/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	active = 'list-article-dernier';
  //document
  item1: document[] = [];
 
  //expert
  item3: expert[] = [];
  
  //ticket
  item5: ticket[] = [];
  constructor(
    private service1: DocumentService,
    private service3: ExpertService,
    private service5: TicketService
  ) { }

  ngOnInit() {
    //document
    this.GetDocument();
   
    //expert
    this.GetExpert();
    //ticket
    this.GetTicket();
  }
  GetDocument() {
    this.service1.getDocument().subscribe((allData) => {
      this.item1 = allData;
      console.log(this.item1);

    });
  }
 
  GetExpert() {
    this.service3.getExperts().subscribe((allData) => {
      this.item3 = allData;
      console.log(this.item3);

    });
  }
 
  GetTicket() {
    this.service5.getTickets().subscribe((allData) => {
      this.item5 = allData;
      console.log(this.item5);

    });
  }

}


