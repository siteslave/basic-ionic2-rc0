import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { DetailPage } from '../detail/detail'
import { Api } from '../../providers/api'

export interface IUser {
  name: string,
  email: string
}

@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html'
})
export class EmployeesPage implements OnInit {

  users: Array<IUser>
  
  constructor(public navCtrl: NavController, private api: Api, private loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('Hello Employees Page');
  }

  ngOnInit() {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
     loader.present();
    
    this.api.getList()
      .then(data => {
        this.users = <Array<IUser>>data;
        loader.dismiss();
      });
  }

  getDetail(user: IUser) {
    this.navCtrl.push(DetailPage, { user: user });
  }

}
