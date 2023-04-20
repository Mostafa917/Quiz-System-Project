import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizSystemFrontend';
  constructor(private globalService:GlobalService){
    //check if token exists
    if(this.globalService.isLoggedIn()){
      const token = {
        "token":localStorage.getItem("token")
      }
      //get token and call getTokenId to get the user
      this.globalService.getTokenId(token).subscribe(res=>{
       globalService.userData = res.data;
      },()=>{

      },()=>{

        globalService.isLogin = true;
      })
    }
    else{
      globalService.isLogin = false;
    }

  }
  

}
