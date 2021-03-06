import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import * as messageObject from '../message.json';

@Component({
  selector: 'app-notify-dialog',
  templateUrl: './notify-dialog.component.html',
  styleUrls: ['./notify-dialog.component.scss']
})
export class NotifyDialogComponent implements OnInit {
  dialogHeader = 'Send Notification';

  placeholder_body: string = messageObject.NOTIFY.BODY_PLACEHOLDER;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data.signature = sessionStorage.getItem('userSigninName');
  }
}
