import { Component } from '@angular/core';
import { ProductService } from '../../Admin/product.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';
import { AuthService } from 'src/app/login/auth.service';
import { Type } from 'src/app/models/Category.enum';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/cart.service';



@Component({
  selector: 'app-user-product-list',
  templateUrl: './user-product-list.component.html',
  styleUrls: ['./user-product-list.component.css']
})
export class UserProductListComponent {
  visited=false;
  listProducts=Object.values(Type)
  num:any

  products!: any[];
  constructor(private service:ProductService, private router:Router,private service1:UserService,private authService:AuthService,private cartService:CartService){

  }
  ngOnInit(): void {
    localStorage.clear();
    this.service.getProducts().subscribe(a=> this.products=a)
  }
  addproductToUser(event:Event,product:any,quant:any){
    console.log(product);
    this.service1.addProductToUser(this.authService.id,product.productId,quant).subscribe(
      a=> {console.log(a); this.service1.getById(this.authService.id).subscribe(a=>{ this.cartService.setCartItemCount(a.products.length)}); })
      setTimeout(()=>Swal.fire("added to cart"),100)
  }
  increase(event :Event,i:any){
    i.quantity++;
    
    
  }
  decrease(event:Event,i:any,){
    i.quantity--;

  }
  
  update(event:any){
    console.log(event.value)
    this.service.getByCategory(event.target.value).subscribe(a=>this.products=a);
  }
  
}
