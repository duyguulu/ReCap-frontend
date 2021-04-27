import { Component, OnInit } from '@angular/core';
import { CarImage } from '../models/carImage';
import { CarImageService } from '../services/carImage.service';

@Component({
  selector: 'app-carImage',
  templateUrl: './carImage.component.html',
  styleUrls: ['./carImage.component.css']
})
export class CarImageComponent implements OnInit {
  carImages:CarImage[]=[];
  dataLoaded=false;
  currentCarImage:CarImage;
  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {

  }

  getCarImagesById(carId:number){
    this.carImageService.getCarImagesById(carId).subscribe(response =>{
      this.carImages=response.data;
      this.dataLoaded=true;
    })
  }

}
