import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-user-product-list',
  templateUrl: './user-product-list.component.html',
  styleUrls: ['./user-product-list.component.css']
})
export class UserProductListComponent {

  products!: any[];
  constructor(private service:ProductService, private router:Router,private service1:UserService){

  }
  ngOnInit(): void {
    this.service.getProducts().subscribe(a=> this.products=a)
  }
  addproductToUser(event:Event,product:any){
    this.service1.addProductToUser(12,product.productId).subscribe(a=> console.log('added product to user'))
  }
  
}
