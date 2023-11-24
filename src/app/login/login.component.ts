import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:any
  validateString:any;
  
  constructor(private fb:FormBuilder,private router:Router,private service:UserService,private authService:AuthService){

  }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]

    }

    )
    console.log(this.authService.isLogin);
    
  }
  onSubmit(){
    
    const formData = this.loginForm.value;
    
    this.service.validateUser(formData).subscribe(a=>this.validateString=a );
    
    setTimeout(()=>{console.log(this.validateString);
      this.authService.isLogin=true
      console.log(this.authService.isLogin);
    
      console.log('data added succesfully')},500)
    this.router.navigate(['welcome'])



  }

}
