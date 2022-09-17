import { Component, OnInit } from '@angular/core';
import { QueueService } from './services/queue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    this.queueService.checkConnectionStatus();
    this.queueService.requestQueue();
  }

}
