import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CatalogueModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
