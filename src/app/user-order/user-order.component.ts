import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from '../order/order.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../login/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!:MatSort;

  order:any;
  status=['Ordered','Dispatched','Delivered']
  orderColumnList=["orderId","userId","email","prize","time"]
  datasource:any;
  id!:any
  constructor(private service:OrderService,private auth:AuthService,private route:ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.paramMap.subscribe(a=> this.id=a.get('id'))
    this.service.getOrderByUserId(this.id).subscribe(a=> {this.order=a;console.log(a);
    this.datasource=new MatTableDataSource<any>(this.order);
    this.datasource.sort=this.sort
    if (this.paginator) {
      this.datasource.paginator = this.paginator;
    }
    });
    
  }
  applyFilter(filterValue: any) {
    this.datasource.filter = filterValue.target.value.trim().toLowerCase();
  }

  onSelectChange(event :any,order:any){
    this.service.setOrderStatus(order.orderId,event.target.value).subscribe(a=>console.log("order status updated"))
  }
}
