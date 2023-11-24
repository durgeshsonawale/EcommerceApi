import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Type } from 'src/app/models/Category.enum';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  productForm:any
  constructor(private fb:FormBuilder,private productService:ProductService,private router:Router){

  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      category: [null, Validators.required],
      
       price: ['', Validators.required],
       description: ['', Validators.required],
       imageUrl: ['', Validators.required],
      rating: ['', Validators.required],
    });
  }
  listProducts=Object.values(Type);



  onSubmit(){
    
    const formData = this.productForm.value;
    this.productService.addProducts(formData).subscribe(a=> console.log('hii'))
    console.log('data added succesfully')
    this.router.navigate(['productlist'])



  }
}
