import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {RandomStuffService} from '../../providers/random-stuff-service';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html',
  providers: [RandomStuffService]
})

export class Page5Page {
  public people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public remapi: RandomStuffService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page5');

    this.loadPeople();
  }

  loadPeople(){
    console.log("Accessing API data...");
  this.remapi.load()
  .then(data => {
    this.people = data;
  });

}
}
