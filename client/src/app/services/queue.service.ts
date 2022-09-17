import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
import { QueueItem } from '../interfaces/queue.interface';

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
    return this.socket.fromEvent<QueueItem[]>('queue');
  }

  callItem(id: string) {
    this.socket.emit('call', id);
  }
  
  private requestMasterQueue(): void {
    this.socket.emit('queue');
  }
}
