import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import { ProductService } from '../Admin/product.service';
import { AuthService } from '../login/auth.service';
import { OrderService } from '../order/order.service';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  displayedColumns: string[] = ['productId', 'description', 'imageUrl', 'price', 'rating', 'quantity'];
  products!:any[];
  user:any;
  price:number=0
  num=0
  constructor(private service:UserService,private router:Router,private service1:ProductService,private authService:AuthService,private orderService:OrderService,private cartService:CartService){

  }
  ngOnInit(): void {
    this.service.getById(this.authService.id).subscribe(a=>{ this.products=a.products;this.getPrice()});
    //setTimeout(()=> { console.log(this.products)},100)
   
    // setTimeout(()=>{for(let p of this.products ){
    //   this.price+=p.price * p.quantity
    // }},100)
    

  }
  getPrice(){
    {for(let p of this.products ){
      this.price+=p.price * p.quantity
    }}
  }
  onDelete(event: Event,data:any){
    console.log(data.productId);
    this.service.deleteproductFromUser(this.authService.id,data.productId).subscribe(a=>{console.log(a);this.num=this.cartService.getCartItemCount()-1;this.cartService.setCartItemCount(this.num)});
    setTimeout(() => {
      this.service.getById(this.authService.id).subscribe(a=> {this.products=a.products;this.price=0;this.getPrice()});
      this.getPrice()
     }, 100);

     }
     

    purchase(){
      this.orderService.postOrder(this.authService.id).subscribe(a=>{Swal.fire("Yay... Order placed !!!!!");this.cartService.setCartItemCount(0);this.router.navigate(["welcome"])});
      //setTimeout(()=>Swal.fire("Yay... Order placed !!!!!"),100)
    }
    decrease(event:Event, product:any){
      product.quantity--;
      this.price-=product.price
      this.service1.editProducts(product).subscribe(a=> console.log("decreased successfully"));
      
      

    }
    increase(event:Event,product:any){
      product.quantity++;
      this.price+=product.price
      this.service1.editProducts(product).subscribe(a=> console.log("increased successfully"));
    }


  }

  




