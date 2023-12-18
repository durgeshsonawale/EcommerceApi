import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order/order.service';
import { AuthService } from '../login/auth.service';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  isOpen:boolean=false
  user!:any
  constructor(private service: OrderService , private authService:AuthService,private userService:UserService){}
  ngOnInit(): void {
    this.userService.getById(this.authService.id).subscribe(a=> this.user=a);
    
  }
  



}
