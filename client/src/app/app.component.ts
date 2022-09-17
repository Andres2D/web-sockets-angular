import { Component, OnInit } from '@angular/core';
import { QueueService } from './services/queue.service';
import { QueueItem } from './interfaces/queue.interface';
import { MOCK_QUEUE } from './mock/queue.mock';
import { ActionOutput, Action } from './interfaces/action.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  currentItem: QueueItem[] = [MOCK_QUEUE[0]];
  masterQueue: QueueItem[] = MOCK_QUEUE;

  masterQueueActions: Action[] = [
    {
      id: 'to_turn',
      label: 'Call',
      style: 'success'
    }
  ];
  
  turnQueueActions: Action[] = [
    {
      id: 'exit',
      label: 'Finish',
      style: 'danger'
    }
  ];

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    // this.queueService.checkConnectionStatus();
    // this.queueService.getQueue().subscribe(queue => {
    //   console.log(queue);
    // });
  }

  executeAction(payload: ActionOutput) {
    console.log(payload);
  }
}
