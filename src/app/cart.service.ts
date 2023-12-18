import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './users/user.service';
import { AuthService } from './login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();
  products: any;
  count: any;

  constructor(private service:UserService,private auth:AuthService) { 
    console.log('heyyyyyyyy')
    console.log(this.auth.id)
    
   
    this.service.getById(this.auth.id).subscribe(a=>{this.products=a.products;this.count=this.products.length;this.cartItemCountSubject.next(this.count); console.log("hello"+ this.count);})
  
    
  }
  getCartItemCount(): number {
    return this.cartItemCountSubject.getValue();
  }

  setCartItemCount(count: number): void {
    this.cartItemCountSubject.next(count);
  }
}
