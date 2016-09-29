import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  user: Object

  constructor(public navCtrl: NavController, private navParams: NavParams) {}

  ionViewDidLoad() {
    this.user = this.navParams.get('user');
  }

}
