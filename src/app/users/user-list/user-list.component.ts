import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!:MatSort;
  constructor(private service:UserService,private router:Router){}
  users!:any[]
  dataSource!: MatTableDataSource<any>;
  ngOnInit(): void {
    this.service.getAllUser().subscribe(a=>{this.users=a; console.log(a);this.dataSource=new MatTableDataSource(this.users);
      this.dataSource.sort=this.sort
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    })
    
  }
  showDetail(product:any){
    this.router.navigate(["userdetail",product.userId])

  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }
  


}
