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
    });
    this.socket.on("disconnect", () => {
      console.log("Disconnected ⬇️");
    });
  }

  requestQueue() {
    const algo = this.socket.emit('queue');
    console.log(algo);

    this.socket.on('queue', (res: any) => {
      console.log(res);
    })
  }

  getMessage() {
    return this.socket.fromEvent('queue').pipe(map((data: any) => console.log(data)));
  }
}
