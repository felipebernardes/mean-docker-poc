import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ComprasComponent } from './compras/compras.component';
import { ComprasService } from './compras/compras.service';
import { NovaCompraComponent } from './compras/nova-compra/nova-compra.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    AppRouting
  ],
  declarations: [AppComponent, PageNotFoundComponent, ComprasComponent, NovaCompraComponent],
  providers: [ComprasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
