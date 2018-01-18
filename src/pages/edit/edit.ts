import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  public powers = ['Really Smart', 'Super Flexible',
              'Super Hot', 'Weather Changer'];

  public hero: {name: string, power: string; dateBirth: Date}  = {
    name: 'Nombre',
    power: this.powers[0],
    dateBirth: new Date()
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

}
