import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ProductListComponent } from './Admin/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { UserProductListComponent } from './products/user-product-list/user-product-list.component';
import { OrderComponent } from './order/order.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminWelcomeComponent } from './Admin/admin-welcome/admin-welcome.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { ProfileComponent } from './profile/profile.component';
import { UserOrderComponent } from './user-order/user-order.component';

const routes: Routes = [{path:'welcome',component: WelcomeComponent},

{path:'usernav',component:NavBarComponent},
{path:'adminnav',component:AdminNavComponent},
{path:'admin',component:AdminWelcomeComponent},

{path:'products',component: UserListComponent},
{path:'productlist',component: ProductListComponent},
{path:'login',component: LoginComponent},
{path:'addproduct',component: AddProductComponent},
{path:'cart',component: CartComponent},
{path:'userproductlist',component:UserProductListComponent},
{path:'orderdetails/:id',component:OrderComponent},
{path:'orderlist',component:OrderListComponent},
{path:'edit/:id',component:EditProductComponent},
{path:'profile',component:ProfileComponent},
{path:'userdetail/:id',component:UserOrderComponent},
{path:'',redirectTo:'welcome',pathMatch:'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
