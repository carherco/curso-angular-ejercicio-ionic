import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class CalcPage {

  public val1: number = 7;
  public val2: number = 5;
  constructor(public navCtrl: NavController) {

    this.val1 = 7;
    this.val2 = 5;
  }

  suma() {
    return this.val1 + this.val2;
  }

  resta() {
    return this.val1 - this.val2;
  }

  mult() {
    return this.val1 * this.val2;
  }

  reset() {
    this.val1 = 0;
    this.val2 = 0;
  }

}
