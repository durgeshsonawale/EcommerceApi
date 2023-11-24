import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { UserProductListComponent } from './products/user-product-list/user-product-list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [{path:'welcome',component: WelcomeComponent},
{path:'',redirectTo:'welcome',pathMatch:'full'},
{path:'products',component: UserListComponent},
{path:'productlist',component: ProductListComponent},
{path:'login',component: LoginComponent},
{path:'addproduct',component: AddProductComponent},
{path:'cart',component: CartComponent},
{path:'userproductlist',component:UserProductListComponent},
{path:'order',component:OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
