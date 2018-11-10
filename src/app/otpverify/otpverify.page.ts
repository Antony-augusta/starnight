import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.page.html',
  styleUrls: ['./otpverify.page.scss'],
})
export class OTPVerifyPage implements OnInit {
  account: { phoneNo: string, Token: string } = {
    phoneNo: '',
    Token: ''
  };
  constructor(private http: HttpClient, 
    private router: Router, 
    public loadingController: LoadingController, 
    private toast: ToastController,
    private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.account.phoneNo = params["phoneno"];
    });
  }

  ngOnInit() {
    if (localStorage.getItem("phonenumber") == "verified") {
      this.router.navigateByUrl("/home");
    }
  }
  async doVerify(){
    const loading = await this.loadingController.create({
      spinner: 'hide',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    loading.present();
    this.http.post("https://localhost:44397/api/Activations/OTPVerify", this.account).subscribe(res => {
      loading.dismiss();
      if (res["success"]) {
        localStorage.setItem("phonenumber", "verified");
        this.router.navigateByUrl("/home");
      }
    }, () => {
      loading.dismiss();
    })
  }
  async Resend(){
    const loading = await this.loadingController.create({
      spinner: 'hide',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    let t = await this.toast.create({
      message: 'OTP Resend Successfully',
      duration: 3000,
      position: 'top'
    });
    loading.present();
    this.http.post("https://localhost:44397/api/Activations/generateOTP", this.account).subscribe(res => {
      loading.dismiss();
      if (res["success"]) {        
        t.present();
      }
    }, () => {
      loading.dismiss();
    })
  }
}
