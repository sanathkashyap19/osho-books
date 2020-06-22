import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  route: string;
  breadcrumbList: Array<any>;
  count: number;
  breadcrumbLinksList: any[];

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.route = location.path();
        this.breadcrumbList = this.route.split('/');
        this.breadcrumbLinksList = [this.breadcrumbList[0]];

        for (let i = 1; i <= this.breadcrumbList.length; i++) {
          const link =
            this.breadcrumbLinksList[i - 1] + '/' + this.breadcrumbList[i];
          this.breadcrumbLinksList.push(link);
        }
        this.count = this.breadcrumbList.length;
      } else {
        this.route = 'Home';
      }
    });
  }

  ngOnInit(): void {}
}
