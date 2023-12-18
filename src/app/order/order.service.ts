import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  api:string='http://localhost:8080/order'
  api1:string='http://localhost:8080/order/orders'
  api2:string='http://localhost:8080/order/orderproduct'

  constructor(private http:HttpClient) { }
  getAllOrders(){
    return this.http.get(this.api);
  }
  setOrderStatus(id:number,status:string){
    return this.http.put(`${this.api}/${id}/${status}`,null);
  }
  postOrder(id:any){
    return this.http.post(`${this.api}/${id}`,null,{responseType:'text'})
  }
  getOrderById(id:any){
    return this.http.get(`${this.api}/${id}`)
  }
  getOrderByUserId(id:any){
    return this.http.get(`${this.api1}/${id}`)
  }
  getOrderProduct(id:any){

    return this.http.get(`${this.api2}/${id}`)
  }
}
