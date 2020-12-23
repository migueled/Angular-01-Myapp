import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

///import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';

import { Appnavbar } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumboComponent } from './components/body/jumbo/jumbo.component';
import { PortafolioComponent } from './components/body/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    Appnavbar,
    FooterComponent,    
    JumboComponent, PortafolioComponent
  ],
  imports: [
    BrowserModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
