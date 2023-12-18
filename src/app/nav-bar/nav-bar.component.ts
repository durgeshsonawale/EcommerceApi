import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { UserService } from '../users/user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isOpen:boolean=false
  constructor(private cartServce:CartService,private userService:UserService){

  }
  ngOnInit(): void {
    console.log('hiiii')
    this.cartServce.cartItemCount$.subscribe(a=> {this.cartItemCount=a;console.log(a)})
  }

  cartItemCount!:number
  
  

}
