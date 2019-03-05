import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  email: String;
  password: String;
  constructor(private router: Router, private appService: AppService) { }


  ngOnInit() {}

  register() : void {
    if(this.email && this.password !== null){
      this.appService.userRegister({
        email: this.email,
        password: this.password
      })
      .subscribe(data => {
        localStorage.setItem('mean-token', data.token);
        this.router.navigate(["note"]);
      },
      err => {
        alert(err.error.message)
      })
    } 
  }

  login() : void {
    if(this.email && this.password !== null){
      this.appService.userLogin({
        email: this.email,
        password: this.password
      })
      .subscribe(data => {
        localStorage.setItem('mean-token', data.token);
        this.router.navigate(["note"]);
      },
      err => {
        alert(err.error.message)
      })
    }
  }
}


