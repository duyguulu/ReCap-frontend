import { CarImage } from "./carImage";

export interface CarDetailDto{
    carId:number;
    carName:string;
    brandId:number;
    brandName:string;
    colorId:number;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    descriptions:string;
    carImage:CarImage[];
}