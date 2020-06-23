import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {}
  
  navigateFlow(page: string) {
    if(page === 'home') {
      this.router.navigate(['../']);
    }
    if(page === 'products') {
      this.router.navigate(['/product-details']);
    }
  }

  //clicking outside should close the hamburger menu
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!event.target.classList.contains('navbar-collapse *') && !event.target.classList.contains('navbar-toggler') && !event.target.classList.contains('icon-bar')) {
      if(this.isCollapsed) {
        this.isCollapsed = !this.isCollapsed;
      }
    } 
  }

}
