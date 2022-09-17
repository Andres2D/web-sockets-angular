import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { QueueComponent } from './components/queue/queue.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: { transports: ['websocket'] }};

@NgModule({
  declarations: [
    AppComponent,
    QueueComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
