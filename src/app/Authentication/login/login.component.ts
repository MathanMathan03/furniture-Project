import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  [x: string]: any;
    
  email:string='';
  password:string='';
  log:any[]=[]
  constructor(private api:ApiService){}



   login(){
      let getapi="email="+this.email+"&password="+this.password;
      this.api.getUser(getapi).subscribe((reponse:any)=>{
        this.log=reponse;
        if(this.log.length>0){
          alert('login sucessful')
          sessionStorage.setItem("email",this.log[0].email)

        }
        
      }) 
   }
}
