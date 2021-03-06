import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DetailsOnHoverDirective } from './directives/details-on-hover.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FilterComponent } from './components/filter/filter.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ItemCardComponent,
    HeaderComponent,
    DetailsOnHoverDirective,
    BreadcrumbsComponent,
    FilterComponent,
    StarRatingComponent,
  ],
  imports: [CommonModule, NgbModule, RouterModule],
  exports: [
    NgbModule,
    CarouselComponent,
    ItemCardComponent,
    HeaderComponent,
    FilterComponent,
    StarRatingComponent
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}
