import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Trans = 'TRANS'
}
export class User {
  email: string = '';
  password: string = '';
  birthDate: Date | null = null;
  gender: string = '';
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
  
})
export class SignUpComponent implements OnInit{
  user: User = new User();
  myForm!:FormGroup
  
  genderOptions: string[] = Object.values(Gender); 
  
  

  constructor(private service:UserService,private router:Router,private dialogRef:DialogRef,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.myForm=this.formBuilder.group({
      email: [''],
  password:[''],
  birthDate: [null],
  gender: ['']

    })
  }

  submit() {
    // Handle form submission logic here
    console.log('Form submitted!',this.user);
    this.service.addUser(this.myForm.value).subscribe((a)=>{ 
      if(a==="already exist"){
        Swal.fire("user already exist");
        this.myForm.reset();
      }
      
      else {Swal.fire("Signed Up succesfully");this.dialogRef.close()} });

    // Perform actions like sending form data to a server, etc.
  }
  closeDialog(){
    this.dialogRef.close()
  }

}
