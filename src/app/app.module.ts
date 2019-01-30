import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/data.service';
import { AppRoutingModule } from './app-routing.module';
import { ViewComponent } from './view/view.component';


 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
