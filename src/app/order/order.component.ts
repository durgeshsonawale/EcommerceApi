import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  value:any;
  order!:any;
  res:any
  constructor(private router:Router,private route:ActivatedRoute,private service:OrderService){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(a=>{this.value=a.get('id');this.service.getOrderProduct(this.value).subscribe((a:any)=>{this.order=a;console.log(this.order);this.res=this.order[0].order;console.log(this.order[1].product)})} )
   
    
  }
  

  

}
