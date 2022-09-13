import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomersHostComponent} from './customers-host/customers-host.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        CustomersHostComponent,
        CustomerDetailsComponent,
        CustomersListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
