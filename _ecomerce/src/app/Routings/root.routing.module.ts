import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { AccountComponent } from '../components/account/account.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';

const appRootRoutes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/:id',
        component: CheckoutComponent
    }
];

@NgModule({

    declarations: [],
    imports: [RouterModule.forRoot(appRootRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
})
export class AppRootRoutingModule {

}
