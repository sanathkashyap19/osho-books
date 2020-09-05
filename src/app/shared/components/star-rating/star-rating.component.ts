import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  starList: boolean[] = [true, true, true, true, true];       // create a list which contains status of 5 stars
  rating = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setStarTable(index: any, status): any {
    if (status) {
      this.rating = index + 1;
      switch (index) {
        case 0:
          return this.starList[index] = false;
        case 1:
          return this.starList = [false, false, true, true, true];
        case 2:
          return this.starList = [false, false, false, true, true];
        case 3:
          return this.starList = [false, false, false, false, true];
        case 4:
          return this.starList = [false, false, false, false, false];
      }
      return null;
    } else {
      this.rating = index;
      switch (index) {
        case 0:
          return this.starList = [true, true, true, true, true];
        case 1:
          return this.starList = [false, true, true, true, true];
        case 2:
          return this.starList = [false, false, true, true, true];
        case 3:
          return this.starList = [false, false, false, true, true];
        case 4:
          return this.starList[index] = true;
      }
    }
  }
}
