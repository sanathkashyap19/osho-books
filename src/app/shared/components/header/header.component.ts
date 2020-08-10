import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  currentUser: User;
 
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
 



  ngOnInit(): void {}
  
  //clicking outside should close the hamburger menu
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!event.target.classList.contains('navbar-collapse *') && !event.target.classList.contains('navbar-toggler') && !event.target.classList.contains('icon-bar')) {
      if(this.isCollapsed) {
        this.isCollapsed = !this.isCollapsed;
      }
    } 
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
