import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce-Project';
  isLogin!:boolean
  constructor(private service: AuthService,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.isLogin=this.service.isLogin;
  }
  
}
