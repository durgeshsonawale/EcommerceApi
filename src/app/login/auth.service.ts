import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id!:number;
  

  constructor(private service:UserService) {
    
  
  }

  


  
}
