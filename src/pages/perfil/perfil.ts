import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user.service';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [UserService]
})
export class PerfilPage implements OnInit{

  rut;
  data;
  userInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _userService: UserService) {
    this.data = JSON.parse(localStorage.getItem("identity"));
    this.userInfo ="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  ngOnInit(){
    this.rut = this.data[0].rut;

    this._userService.userInfo(this.rut).subscribe(
      response => {
        this.userInfo = response[0];
        console.log(this.userInfo);
      }, error => {
        console.log(error);
      }
    )
   
  }

}
