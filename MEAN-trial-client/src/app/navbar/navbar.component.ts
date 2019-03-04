import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public location ;
  constructor() { 
    this.location = window.location.pathname;
  }

  ngOnInit() {
    console.log(this.location)
  }

}
