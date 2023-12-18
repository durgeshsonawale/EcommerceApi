import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api:string='http://localhost:8080/user/users';
  api1:string='http://localhost:8080/user';
  api2:string='http://localhost:8080/user/products'
  api3:string='http://localhost:8080/user/add'

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any>{
    return this.http.get(this.api)
  }
  getById(id1:any):Observable<any>{
    return this.http.get(`${this.api1}/validate1/${id1}`)
  }
  deleteproductFromUser(id1:any,id2:any){
    return this.http.delete(`${this.api2}/${id1}/${id2}`,{ responseType: 'text' });
  }
  addProductToUser(id1:any,id2:any,quant:any){
    return this.http.get(`${this.api1}/${id1}/${id2}/${quant}`,{ responseType: 'text' });
  }
  validateUser(user:any){
    return this.http.post('http://localhost:8080/user/validate',user)

  }
  addUser(user:any){
    return this.http.post(this.api3,user,{ responseType: 'text' });
  }
}
