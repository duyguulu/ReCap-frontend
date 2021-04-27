import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from '../models/carDetailDto';
import { CarImage } from '../models/carImage';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {
  carDetails:CarDetailDto[]=[];
  dataLoaded=false;
  carImages:CarImage[];
  carId:number;
  imgUrl:string="https://localhost:44342/"

  constructor(private carService: CarService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if (params["carId"]){
        this.carId=(params['carId']);
        this.getCarDetails(params["carId"])
      }
    })

  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response =>{
      this.carDetails=response.data;
      this.carImages=this.carDetails[0].carImage;
    })
  }  

  getCurrentImageClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }

}
