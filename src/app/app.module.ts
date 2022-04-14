import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HttpClientModule } from '@angular/common/http';
import { SacolaComponent } from './sacola/sacola.component';


@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    SacolaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
