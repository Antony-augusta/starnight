import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  account: { phoneNo: string } = {
    phoneNo: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
//   doLogin() {
//     this.http.post("https://localhost:44397/api/Activations/generateOTP/", this.account).subscribe(res => {
// console.log(res);
//     })
//   }
}
