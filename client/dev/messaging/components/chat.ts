/// <reference path="../../bower_components\socket.io-client\socket.io-client.d.ts" />
import {
  Component,
  Inject
} from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: 'messaging/templates/chat.html',
  styleUrls: ['messaging/styles/chat.css']
})
export class Chat {
  message:string;

  constructor() {
    io().on('chat message', function(msg){
       $('#messages').append($('<li>').text(msg));
    });
  }
  formSubmit() {
    console.info("formSubmit");
    io().emit('chat message', $('#m').val());
    $('#m').val('');
  }
}
