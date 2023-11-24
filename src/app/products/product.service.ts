import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  addProducts(product:any){
    return this.http.post(this.api1,product)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.api1}/${id}`);

  }
}
