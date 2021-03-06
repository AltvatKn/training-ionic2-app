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

    isImgurGif(child){
    return child.data.url.indexOf(".gif") != -1;
  }

  cleanImgLink(str){
    if(str.indexOf("gallery") !== -1){
     str = str.replace("gallery/", "");
    }
    if(str.indexOf("/a/") !== -1){
      str = str.replace("a/", "");
    }
    return str;
  }

  cleanGifLink(str){
    if(str.indexOf(".gifv") !== -1){
      return str.replace(".gifv", ".gif");
    } else {
      return str;
    }
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
