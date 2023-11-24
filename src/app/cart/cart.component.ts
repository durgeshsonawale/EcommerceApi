import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  displayedColumns: string[] = ['productId', 'description', 'imageUrl', 'price', 'rating', 'quantity'];
  products!:any[];
  user:any;
  constructor(private service:UserService,private router:Router,private service1:ProductService){

  }
  ngOnInit(): void {
    this.service.getById(12).subscribe(a=> this.products=a.products);

  }
  onDelete(event: Event,data:any){
    console.log(data.productId);
    this.service.deleteproductFromUser(12,data.productId).subscribe(a=> console.log("removed !!!!!"));


     }


  }

  




