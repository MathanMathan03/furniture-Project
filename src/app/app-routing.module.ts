import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './alignment/body/body.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { LoginComponent } from './Authentication/login/login.component';

const routes: Routes = [
{path:"",component:BodyComponent},
{path:"register",component:RegistrationComponent},
{path:"login",component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
