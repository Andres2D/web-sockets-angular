import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private socket: Socket) { }

  checkConnectionStatus() {
    this.socket.on("connect", () => {
      console.log("Successfully connected: 🌐");
      this.requestMasterQueue();
    });
    this.socket.on("disconnect", () => {
      console.log("Disconnected ⬇️");
    });
  }
  
  getQueue() {
    return this.socket.fromEvent('queue');
  }
  
  private requestMasterQueue(): void {
    this.socket.emit('queue');
  }
}
