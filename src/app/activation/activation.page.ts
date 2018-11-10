import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.page.html',
  styleUrls: ['./activation.page.scss'],
})
export class ActivationPage implements OnInit {
  account: { phoneNo: string } = {
    phoneNo: ''
  };
  constructor(private http: HttpClient, private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
    if (localStorage.getItem("phonenumber") == "verified") {
      this.router.navigateByUrl("/home");
    }
  }

  async doLogin() {
    const loading = await this.loadingController.create({
      spinner: 'hide',      
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    loading.present();
    this.http.post("https://localhost:44397/api/Activations/generateOTP", this.account).subscribe(res => {
      loading.dismiss();
      if(res["success"]){
        this.router.navigate(["/OTPVerify", this.account.phoneNo]);        
      }
    }, () => {
      loading.dismiss();
    })
  }

}
