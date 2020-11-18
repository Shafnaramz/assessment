import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';
import { TestComponent } from './test/test.component'

const routes: Routes = [
  {
    path:'',component:TestComponent
  },
  {
    path:'register',component:RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
