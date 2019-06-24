import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './page/form-page/form-page.component';
import { FormEmailComponent } from './component/form-email/form-email.component';
import { MailBoxPageComponent } from './page/mail-box-page/mail-box-page.component';
import { MailListComponent } from './component/mail-list/mail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    FormEmailComponent,
    MailBoxPageComponent,
    MailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
