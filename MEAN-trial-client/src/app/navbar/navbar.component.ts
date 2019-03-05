import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public location ;
  constructor(
    private router: Router) { 
  }

  ngOnInit() { 
    this.location = window.location.pathname;}

  logout() {
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('user');
  }

}
