import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

export interface IUser {
  name: string,
  email: string
}

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  user: IUser

  constructor(public navCtrl: NavController, private navParams: NavParams) {}

  ionViewDidLoad() {
    this.user = this.navParams.get('user');
  }

}
