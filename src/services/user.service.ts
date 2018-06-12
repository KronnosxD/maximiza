import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global'; 

@Injectable()
export class UserService{
    public url: string;
	public identity;
    public token;
    
    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    //Login


    login(username, password) {
		let body = `usuario=${username}&clave=${password}`;
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this._http.post(this.url + 'login', body, { headers: headers })
			.map(res => res.json());
    }
    
    userInfo(username) {
		let body = `usuario=${username}`;
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this._http.post(this.url + 'info_cliente', body, { headers: headers })
			.map(res => res.json());
	}
	

   
}