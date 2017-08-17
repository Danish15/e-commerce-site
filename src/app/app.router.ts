import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BuyComponent } from './buy/buy.component';
import { FaqComponent } from './faq/faq.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';



export const router: Routes = [
    {path: '', redirectTo: 'navbar', pathMatch: 'full'}, 
    {path: 'inventory', component: InventoryComponent},
    {path: 'buy', component: BuyComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'companyinfo', component: CompanyInfoComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'createaccount', component: CreateAccountComponent},
    {path: 'home', component: HomeComponent},


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);