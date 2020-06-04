import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel/carousel.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [CarouselComponent, ItemCardComponent],
  imports: [CommonModule, NgbModule],
  exports: [NgbModule, CarouselComponent, ItemCardComponent],
})
export class SharedModule {}
