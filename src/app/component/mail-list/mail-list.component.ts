import { Component, OnInit } from '@angular/core';
import { MailServerService } from 'src/app/service/mail-server.service';

import { Mail } from '../../model/mail';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
request:Boolean = false;
selectedMail:Boolean = false;
listMail:Mail[]= [];
  constructor(private emailService: MailServerService) { }

  ngOnInit() {
    this.listMail = this.emailService.pullMessage()
    console.log(this.listMail)
  }

  requestMail(){
    this.request = !this.request
  }

  showMail(index){
    if(this.selectedMail === index){
      this.selectedMail = false;
    }else {
    this.selectedMail = index;
    }
  }


}
