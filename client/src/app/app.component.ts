import { Component, OnInit } from '@angular/core';
import { QueueService } from './services/queue.service';
import { QueueItem } from './interfaces/queue.interface';
import { MOCK_QUEUE } from './mock/queue.mock';
import { ActionOutput, Action } from './interfaces/action.interface';
import { masterQueueActions, turnQueueActions } from './constants/queue.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  currentItem: QueueItem[] = [];
  masterQueue: QueueItem[] = [];
  actionsMap: { [key: string]: {
    invoke: (id: QueueItem) => void;
  };} = {
    'to_turn': {
      invoke: (item: QueueItem) => this.callItem(item)
    },
    exit: {
      invoke: (item: QueueItem) => this.removeItem()
    }
  }

  readonly masterQueueActions: Action[] = masterQueueActions;
  readonly turnQueueActions: Action[] = turnQueueActions;

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    this.queueService.checkConnectionStatus();
    this.queueService.getQueue().subscribe(queue => {
      console.log(queue);
      this.masterQueue = queue;
    });
  }

  executeAction(payload: ActionOutput) {
    this.actionsMap[payload.id].invoke(payload.item);
  }

  callItem(item: QueueItem) {
    this.queueService.callItem(item.id);
    this.currentItem = [item];
  }
  
  removeItem(){
    this.currentItem = [];
  }
}
