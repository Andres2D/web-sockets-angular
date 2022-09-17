import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QueueItem } from '../../interfaces/queue.interface';
import { Action, ActionOutput } from '../../interfaces/action.interface';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent {
  @Input() queue: QueueItem[] = [];
  @Input() actions: Action[] = [];
  @Output() execute = new EventEmitter<ActionOutput>();

  emitAction(id: string, item: QueueItem) {
    this.execute.emit({id, item});
  }

}
