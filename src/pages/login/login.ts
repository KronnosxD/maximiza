import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {

  user;
  identity;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _userService: UserService) {
    this.user = {
      rut: "",
      password: ""
      
    }
    this.identity ="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    this._userService.login(this.user.rut,this.user.password).subscribe(
      response => {
        this.identity = response;
        localStorage.setItem('identity', JSON.stringify(this.identity));
        this.navCtrl.setRoot(PerfilPage);
      }, error => {
        console.log(error);
      }
    )
  }


}
