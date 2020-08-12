import { UtilityService } from './../../_services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  imagesUrl;
  bookDetails: any;

  constructor(private utilityService: UtilityService, private router: Router) {}

  ngOnInit(): void {
    this.utilityService.bookDetails.pipe(takeUntil(this.router.events)).subscribe(data => {
      this.bookDetails = data;
    });

    this.imagesUrl = [
      '../../../assets/images/belief_doubt_and_fanaticism-front.jpg',
      '../../../assets/images/belief_doubt_and_fanaticism-back.jpg',
    ];
  }
}
