import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products!: any[];
  constructor(private service:ProductService, private router:Router){

  }
  ngOnInit(): void {
    this.service.getProducts().subscribe(a=> this.products=a)
  }
  
  addProduct(){
    this.router.navigate(['addproduct'])

  }
  onDelete(event: Event,data:any){
    console.log(data.productId);
    this.service.deleteProduct(data.productId).subscribe(() =>{
      this.router.navigate(['/productList']);this.service.getProducts().subscribe(a=> this.products=a)
    }
    

    )
    

  }

}
