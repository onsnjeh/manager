import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { expert } from '../model/expert.model';
import { ExpertService } from '../services/expert-services/expert.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent {
//Form variables
// parentSelectedOption = 'all';
//expert
item3: expert[] = [];

constructor(
  private service3: ExpertService,
  
) { }

ngOnInit() {
  
  
  //expert
  this.GetExpert();

}
GetExpert() {
  this.service3.getExperts().subscribe((allData) => {
    this.item3 = allData;
    console.log(this.item3);

  });
}

}
