import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = 'Write Your Server Name Here';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server ${ this.serverName } was created!`;
  }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  clearText(): void {
    this.serverName = ''
  }

}
