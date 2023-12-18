import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from '../models/Category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api:string='http://localhost:8080/product/products'
  api1:string='http://localhost:8080/product'

  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get(this.api)
  }
  getProductById(id:any){
    return this.http.get(`${this.api1}/${id}`)
  }
  addProducts(product:any){
    return this.http.post(this.api1,product,{responseType:'text'})
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.api1}/${id}`,{responseType:'text'});

  }
  editProducts(product:any){
    return this.http.put(this.api1,product,{responseType:'text'})
  }
  getByCategory(category:any):Observable<any>{
    return this.http.get(`${this.api}/${category}`)
  }
}
