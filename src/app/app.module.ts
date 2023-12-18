import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './users/user-list/user-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './Admin/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { UserProductListComponent } from './products/user-product-list/user-product-list.component';
import { MatTableModule } from '@angular/material/table';
import { OrderComponent } from './order/order.component';
import { AdminWelcomeComponent } from './Admin/admin-welcome/admin-welcome.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { UserOrderComponent } from './user-order/user-order.component';
import { JwtInterceptor } from './JwtInterceptor';





@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductListComponent,
    LoginComponent,
    AddProductComponent,
    CartComponent,
    UserProductListComponent,
    OrderComponent,
    AdminWelcomeComponent,
    AdminNavComponent,
    OrderDetailsComponent,
    NavBarComponent,
    OrderListComponent,
    EditProductComponent,
    ProfileComponent,
    SignUpComponent,
    UserOrderComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
   MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    OverlayModule,
    MatSortModule,
    MatBadgeModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
