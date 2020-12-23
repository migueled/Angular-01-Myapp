import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

///import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';

import { Appnavbar } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Appnavbar
  ],
  imports: [
    BrowserModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
