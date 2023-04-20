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
    if(localStorage.getItem("token")){
      const token = {
        "token":localStorage.getItem("token")
      }
      this.globalService.getTokenId(token).subscribe(res=>{
       globalService.userData = res.data;
       console.log(globalService.userData);
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
