import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPageComponent } from '../app/page/form-page/form-page.component';
import { MailBoxPageComponent } from '../app/page/mail-box-page/mail-box-page.component'

const routes: Routes = [
  {
    path:"form-page",
    component: FormPageComponent
  },
  {
    path:"box-page",
    component: MailBoxPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
