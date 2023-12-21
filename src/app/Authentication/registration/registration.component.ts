import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  firstName:string="";
  lastName:string="";
  email:string="";
  Password:string="";
  cPassword:string="";
  reguser:any[]=[]
   
  constructor(private apiservice:ApiService, private router:Router){}

  register(){
    if(this.firstName !="" && this.lastName !="" && this.email !="" && this.Password !="" && this.cPassword!="" && this.Password == this.cPassword){


    let reguser={
      firstName:this.firstName,
      lastName:this.lastName,
      password:this.Password,
      email:this.email

    }
    this.apiservice.insertUser(reguser).subscribe((response)=>{
      if(response!=null){
        alert("signup success")
        this.router.navigate(['login'])
      }
      else{
        alert("signup failed")
      }
    })
    
  }else{
    alert('Invalid')
  }

}
}
