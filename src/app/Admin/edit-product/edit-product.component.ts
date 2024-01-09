import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from 'src/app/models/Category.enum';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productId:any
  productForm:any
  listProducts = Object.keys(Type).filter(key => !isNaN(Number((Type as any)[key])));


  productDetail:any
  constructor(private fb:FormBuilder,private router:Router,private service:ProductService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(a=>{this.productId=a.get('id');this.service.getProductById(this.productId).subscribe(
      a=> {this.productDetail=a;console.log(this.productDetail);
        this.productForm.setValue(
          {
            productId:this.productId,
            category: this.productDetail.category,
              
               price: this.productDetail.price,
               description: this.productDetail.description,
               available:this.productDetail.availableQuant,
               imageUrl: this.productDetail.imageUrl,
              rating: this.productDetail.rating
      
          }
        )}
    )})
    
  // setTimeout(()=> {
      this.productForm = this.fb.group({
        productId:[null],
        category: [null, Validators.required],
        
         price: ['', Validators.required],
         description: ['', Validators.required],
         available:[0,Validators.required],
         imageUrl: ['', Validators.required],
        rating: ['', Validators.required],
      });
      // 
  // },100)
  // this.productForm.patchValue(
  //   {productId:this.productId}
  // )
  
    
    
    
  }


  onSubmit(){
    const formData = this.productForm.value;
    this.service.editProducts(formData).subscribe(a=> {console.log("edited");this.router.navigate(['productlist'])});
    
    
      
  }
  toggleImage(){
    
  }

}
