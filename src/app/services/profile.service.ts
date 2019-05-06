import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators'
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username="rodgersxy";
  private clientid = '94ec67ca35b8c7b57788';
  private clientsecret = '5743bb7bc33ff5ebe70d9fbb4829f0574639481b';

  constructor(private http:Http) { 
   // console.log("service is now ready");
    // this.username = 'rodgersxy';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json()));
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json()));
  }
  updateProfile(username:string){
    this.username = username;
  }
}
