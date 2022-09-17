import { Component, OnInit } from '@angular/core';
import { QueueService } from './services/queue.service';
import { QueueItem } from './interfaces/queue.interface';
import { MOCK_QUEUE } from './mock/queue.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  currentItem: QueueItem[] = [MOCK_QUEUE[0]];
  masterQueue: QueueItem[] = MOCK_QUEUE;

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    // this.queueService.checkConnectionStatus();
    // this.queueService.getQueue().subscribe(queue => {
    //   console.log(queue);
    // });
  }
}
