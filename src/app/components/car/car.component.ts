import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { CarImage } from '../models/carImage';
import { CarService } from '../services/car.service';
import { CarImageService } from '../services/carImage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  //cars:Car[]=[];
  dataLoaded=false;
  carImages:CarImage[]=[];
  cars: CarDetailDto[] = [];
  currentCar: CarDetailDto;
  imgUrl ="https://localhost:44342/"
  defaultImage="default.jpg";

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
      if(params["carId"]){
        this.getCarsById(params["carId"]);
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
      this.carService.getCars().subscribe(response =>{
      this.cars=response.data;
      this.dataLoaded=true;

    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response =>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
    }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsById(carId:number){
    this.carService.getCarsById(carId).subscribe(response =>{
      this.cars=response.data;
      this.dataLoaded=true;
      
    })
  }

  setCurrentCar(carDetailDto:CarDetailDto){
    this.currentCar=carDetailDto;
  }

}
