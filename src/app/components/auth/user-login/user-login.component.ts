import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[]=[];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''

  }

  loginObj: any={
    email: '',
    password: ''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
  }

  onLogin(){
    if(this.loginObj.email==="learnez@12.com" && this.loginObj.password==="123")
    {
      this.router.navigate(['/landing']);
    }else{
      alert("wrong credentials");
    }
  }

}
