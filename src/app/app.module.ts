import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadService } from './shared/ciudad.service';
import { FormCiudadComponent } from './pages/form-ciudad/form-ciudad.component';
import { VistaCiudadComponent } from './pages/vista-ciudad/vista-ciudad.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCiudadComponent,
    VistaCiudadComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CiudadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
