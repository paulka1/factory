import { Component, OnInit } from '@angular/core';
import { Mail } from '../../model/mail';
import { MailServerService } from 'src/app/service/mail-server.service';

@Component({
  selector: 'app-mail-box-page',
  templateUrl: './mail-box-page.component.html',
  styleUrls: ['./mail-box-page.component.scss']
})
export class MailBoxPageComponent implements OnInit {
emailBox: Mail[]=[];

  constructor(private emailService: MailServerService) { }

  ngOnInit() {
    this.emailBox = this.emailService.myMail
  }

}
