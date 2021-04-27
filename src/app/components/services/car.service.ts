import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  //buradaki localhost apinin çalıştıgı port olmalı, frontend için olan değil
  apiUrl="https://localhost:44342/api/"
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+ "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath= this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath= this.apiUrl + "cars/getcarsbycolordid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsById(carId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath= this.apiUrl + "cars/getbyid?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetails(carId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

}
