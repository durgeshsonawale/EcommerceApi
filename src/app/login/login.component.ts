import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeComponent } from '../home/welcome.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:any
  validateString:any;
  role='';
  isLogin=false;
  idObject:any;
  jwtToken:any="token"
  
  @Output() myEvent: EventEmitter<any> = new EventEmitter<any>();
  
  
  constructor(private fb:FormBuilder,private router:Router,private service:UserService,private authService:AuthService,private dialog: MatDialog){

  }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]

    }

    )
    
    
  }
  openDialog(){
    const dialogRef = this.dialog.open(SignUpComponent,{
      width:'400px',
      disableClose:true
    });
    
    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog result: ${result}`);
    });
  }
  
  onSubmit(){

    if(this.loginForm&&this.loginForm.valid){
    
    const formData = this.loginForm.value;
    if(formData.email=='Admin'&&formData.password=='1234'){
      const a={
        role:'admin',
        isLogin:true


      }
      
      this.myEvent.emit(a);
    }
    else{
      this.service.validateUser(formData).subscribe(a=>{this.idObject=a;console.log(a);} );
      setTimeout(()=>  {console.log(this.idObject);this.authService.id=this.idObject.id;console.log(this.idObject.token.token);localStorage.setItem( this.jwtToken,this.idObject.token.token);
        if(this.authService.id!=-1){
          const a={
            role:'user',
            isLogin:true
    
    
          }
          
          this.myEvent.emit(a);
    
        }
        else{
          const a={
            
            role:'unauthorized',
            isLogin:true
    
    
          }
          console.log("user galat hai !!")
          Swal.fire("invalid");
          
          
          this.myEvent.emit(a);

        }
        
      
      
       },100)


      
    }}
    
      
    
    
    //this.service.validateUser(formData).subscribe(a=>{this.id=a;console.log(a)} );
    
    // setTimeout(()=>{console.log(this.validateString);
    //   this.authService.isLogin=true
    //   console.log(this.authService.isLogin);
    
    //   console.log('data added succesfully');
     
    
    
    // },500)


    



  }

}
