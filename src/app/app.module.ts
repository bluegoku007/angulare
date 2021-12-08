import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './client/home/home.module';
import { HomebannerComponent } from './homebanner/homebanner.component';
@NgModule({
  declarations: [
    AppComponent,
    HomebannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
