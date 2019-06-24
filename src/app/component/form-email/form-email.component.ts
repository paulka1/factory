import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mail } from '../../model/mail';
import { MailServerService } from 'src/app/service/mail-server.service';


@Component({
  selector: 'app-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.scss']
})
export class FormEmailComponent implements OnInit {
emailForm: FormGroup;

  constructor(private fb: FormBuilder, private mailService: MailServerService) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      input:['',Validators.required],
      mail:['',Validators.required],
      date:['',Validators.required],
      objet:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
    });
  }

  onSubmit(){
    this.mailService.sendMessage(this.emailForm.value)
  }

}
