import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarouselComponent, ItemCardComponent, HeaderComponent],
  imports: [CommonModule, NgbModule, RouterModule],
  exports: [NgbModule, CarouselComponent, ItemCardComponent, HeaderComponent],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
