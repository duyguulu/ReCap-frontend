import { Component, OnInit } from '@angular/core';
import { Rental } from '../models/rental';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
  dataLoaded=false;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.rentalService.getCustomers().subscribe(response=>{
    this.rentals=response.data;
    this.dataLoaded=true;
  })

}
}
