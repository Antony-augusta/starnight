import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  slideOpts = {
    effect: 'flip',
    slidesPerView: 3
  };
  bookticket: { phoneNo: string, email: string, nooftickets: number } = {
    phoneNo: "",
    email: "",
    nooftickets: 1
  }
  ticketAmount = 250;
  GST = (this.bookticket.nooftickets * this.ticketAmount) * 18 / 100;
  entertainmenttex = (this.bookticket.nooftickets * this.ticketAmount) * 5 / 100;
  grandtotal = (this.bookticket.nooftickets * this.ticketAmount) + this.GST + this.entertainmenttex;

  constructor(private http: HttpClient, public loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
  }
  renderamount() {
    this.GST = (this.bookticket.nooftickets * this.ticketAmount) * 18 / 100;
    this.entertainmenttex = (this.bookticket.nooftickets * this.ticketAmount) * 5 / 100;
    this.grandtotal = (this.bookticket.nooftickets * this.ticketAmount) + this.GST + this.entertainmenttex;
  }

  async BookNow() {
    console.log(this.bookticket);
    const loading = await this.loadingController.create({
      spinner: 'hide',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    loading.present();
    this.http.post("https://localhost:44397/api/BookTicket", this.bookticket).subscribe(res => {
      loading.dismiss();
      this.router.navigateByUrl("/Confirm");
      console.log(res);
      
    }, () => {
      loading.dismiss();
    })
  }

}
