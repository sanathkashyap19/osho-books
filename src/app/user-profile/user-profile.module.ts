import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTabsComponent } from './vertical-tabs/vertical-tabs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VerticalTabsComponent],
  imports: [CommonModule, SharedModule],
  exports: [VerticalTabsComponent],
})
export class UserProfileModule {}
