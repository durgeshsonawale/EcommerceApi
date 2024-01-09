import { Component, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!:MatSort;

  order:any;
  status=['Ordered','Dispatched','Delivered']
  orderColumnList=["orderId","userId","email","prize","time","status"]
  datasource:any;
defaultSelectedValue: any;
  constructor(private service:OrderService){
    
  }
  ngOnInit(){
    this.service.getAllOrders().subscribe(a=> {this.order=a;console.log(a);
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
    this.service.setOrderStatus(order.orderId,event.target.value).subscribe(a=>{console.log("order status updated");})
  }

}
