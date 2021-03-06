import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    effect: 'flip',
    slidesPerView: 3
  };
  eventtime = new Date();
  constructor(private router: Router) { }
  BookNow(){
    this.router.navigateByUrl("/Booking");
  }
}
