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
  //public before: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moreCats: GimmeCats) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page4');

    this.loadCats();
  }

  isJPGurl(child){
    return (child.data.url.endsWith(".jpg"));
  }

  isImgur(child){
    return child.data.url.indexOf("imgur") != -1;
  }

  isImgurGallery(child){
    return child.data.url.indexOf("gallery") != -1;
  }

  isImgurA(child){
    return child.data.url.indexOf("/a/") != -1;
  }

  remGalFromLink(str){
    return str.replace("gallery/", "");
  }

  remAFromLink(str){
    return str.replace("a/", "");
  }

  isImgurGif(child){
    return child.data.url.indexOf(".gif") != -1;
  }

  loadCats(){
    console.log("Accessing API data...");
  this.moreCats.load()
  .then(data => {
    this.children = data;
    //this.before = data.after;
  });



}
}
