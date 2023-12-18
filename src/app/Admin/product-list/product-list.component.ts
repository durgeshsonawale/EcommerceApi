import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Type } from 'src/app/models/Category.enum';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  showImage=false
  products!: any[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!:MatSort;
  datasource!:MatTableDataSource<any>;
  constructor(private service:ProductService, private router:Router){

  }
  ngOnInit(): void {
    this.service.getProducts().subscribe((a:any[])=>{ this.products = a.map(product => ({ ...product, showImage: false }));
    this.datasource=new MatTableDataSource(this.products);
    this.datasource.sort=this.sort
    if (this.paginator) {
      this.datasource.paginator = this.paginator;
    }
    
  })
  }
  
  addProduct(){
    this.router.navigate(['addproduct'])

  }
  onDelete(event: Event,data:any){
    console.log(data.productId);
    this.service.deleteProduct(data.productId).subscribe(() =>{
      
    })
    setTimeout(() => {
      this.service.getProducts().subscribe(a => {
        this.products = a;
      });
    }, 100);

    
    
    
    

    
    

  }

  toggleImage(product:any){
    console.log(product.showImage)
    product.showImage=!product.showImage
  }

}
