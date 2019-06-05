import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server was created';
serverCreated = false;
serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
  
  }
  onServerUpdateName(event: any){
    this.serverName = event.target.value
  }
}
