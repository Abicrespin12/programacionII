import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LogrosComponent } from './pages/logros/logros.component';
import { FamiliaComponent } from './pages/familia/familia.component';
import { AbigailComponent } from './pages/abigail/abigail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TrabajosComponent,
    MenuComponent,
    LogrosComponent,
    FamiliaComponent,
    AbigailComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
