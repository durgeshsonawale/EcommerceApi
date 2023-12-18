import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { AdminWelcomeComponent } from '../admin-welcome/admin-welcome.component';

// const routes: Routes = [{path:'admin',component:AdminWelcomeComponent },
// {path:'',redirectTo:'admin',pathMatch:'full'},]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //RouterModule.forRoot(routes)
  ],
  bootstrap:[AdminNavComponent]
})
export class AdminModule { }
