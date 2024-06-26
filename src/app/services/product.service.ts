import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Constants } from './constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getCategory(){
    return this.http.get(Constants.API_END_POINT+Constants.METHODS.GET_ALL_CATEGORY);
  }

  getProduct(){
    return this.http.get(Constants.API_END_POINT+Constants.METHODS.GET_ALL_PRODUCT)
  }
  saveProduct(obj:any){
    return this.http.post(Constants.API_END_POINT+Constants.METHODS.CREATE_PRODUCT,obj)
  }
  
  updateProduct(obj:any){
    return this.http.post(Constants.API_END_POINT+Constants.METHODS.UPDATE_PRODUCT,obj)
  }

  deleteProduct(id:any){
    return this.http.get(Constants.API_END_POINT+Constants.METHODS.DELETE_PRODUCT+id);
  }

  getAllProductsByCategoryId(id:number){
    return this.http.get(Constants.API_END_POINT+Constants.METHODS.GET_ALL_PRODUCT_BY_CATEGORYId+id);
  }
}
