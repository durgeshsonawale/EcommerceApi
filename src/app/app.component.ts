import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce-Project';
  isLogin1=false;
   role='';
  
  constructor(private service: AuthService,private cdr: ChangeDetectorRef){}
  // ngOnInit(): void {
  //   this.isLogin=this.service.isLogin;
  // }
  setValue(event:any){
    this.role=event.role
    this.isLogin1=event.isLogin

  }
  
}
