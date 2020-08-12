import { UtilityService } from './../../_services/utility.service';
import { books } from './../../models/book-details';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  imagesUrl;
  listOfBooks = books;
  public currentUser;

  constructor(private router: Router, private utilityService: UtilityService, private activatedRoute: ActivatedRoute) {
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  // constructor() {}

  ngOnInit(): void {
    this.imagesUrl = [
      '../../../assets/images/Capture.PNG',
      '../../../assets/images/Capture.PNG',
      '../../../assets/images/Capture.PNG',
    ];
  }

  routeToDetailsPage(bookDetails: any) {
    this.utilityService.storeBookDetails(bookDetails);
    this.router.navigate(['../product-details'],{
      relativeTo: this.activatedRoute
    });
  }
}
