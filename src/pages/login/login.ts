import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
  
export class LoginPage {

  username: string
  password: string

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }


  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      this.navCtrl.push(TabsPage)
    }
  }

}
