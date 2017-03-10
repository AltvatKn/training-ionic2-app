import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { GimmeCats } from '../../providers/gimme-cats';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',
  providers: [GimmeCats]
})

export class Page4Page {
  public children: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moreCats: GimmeCats) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page4');

    this.loadCats();
  }

  checkURL(child){
    return child.data.url.endsWith(".jpg");
  }

  loadCats(){
    console.log("Accessing API data...");
  this.moreCats.load()
  .then(data => {
    this.children = data;
  });



}
}
