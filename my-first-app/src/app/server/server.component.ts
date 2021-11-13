import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 11;                // Same as serverId = 10;
  serverStatus: string = 'offline';     // Same as serverStatus = 'offline'

  getServerId() {
    return this.serverId;
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
