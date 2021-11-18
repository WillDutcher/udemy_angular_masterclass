import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;                // Same as serverId = 10;
  serverStatus: string = 'offline';     // Same as serverStatus = 'offline'
  showDetails: boolean = false;
  details: string = 'Details';
  clickCountArray = [];
  clickCount: number = 0;

  constructor() {
    this.serverId = Math.floor((Math.random() * 10) + 1);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerId() {
    return this.serverId;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getColor2() {
    return this.clickCount >= 5 ? 'blue' : null;
  }

  onClickDetailsButton(event: Event) {
    this.clickCount++;
    this.clickCountArray.push(this.clickCount);
    this.showDetails = !this.showDetails;
    console.log(this.clickCountArray);
    return this.showDetails;
  }

}
