import { Injectable } from '@angular/core';
import { Mail } from '../model/mail';

@Injectable({
  providedIn: 'root'
})
export class MailServerService {
  myMail:Mail[] = localStorage.getItem('myMail') ? JSON.parse(localStorage.getItem('myMail')): [];

  constructor() { }

  sendMessage(mail){
    this.myMail.push(mail)
    console.log(this.myMail)
    localStorage.setItem('myMail', JSON.stringify(this.myMail))
  }
 
  pullMessage():Mail[] {   
    return this.myMail
  }
}
