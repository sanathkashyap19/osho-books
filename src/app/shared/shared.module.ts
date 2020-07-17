import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ItemCardComponent,
    HeaderComponent,
    TabsComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    NgbModule,
    CarouselComponent,
    ItemCardComponent,
    HeaderComponent,
    TabsComponent,
  ],
})
export class SharedModule {}
