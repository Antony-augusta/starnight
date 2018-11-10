import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  slideOpts = {
    effect: 'flip',
    slidesPerView: 3
  };
  constructor() { }

  ngOnInit() {
  }

}
