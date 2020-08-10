import { UserService } from './_services/user.service';
import { InterceptorService } from './_services/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ProductModule } from './product/product.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // NgbModule,
    SharedModule,
    PagesModule,
    ProductModule,
    PagesRoutingModule
  ],
  providers: [UserService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }], //
  bootstrap: [AppComponent],
})
export class AppModule {}
