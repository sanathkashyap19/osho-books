import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!event.target.classList.contains('navbar-collapse *') && !event.target.classList.contains('navbar-toggler') && !event.target.classList.contains('icon-bar')) {
      if(this.isCollapsed) {
        this.isCollapsed = !this.isCollapsed;
      }
      
    } 
  }

}
