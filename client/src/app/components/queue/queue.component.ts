import { Component, Input } from '@angular/core';
import { QueueItem } from '../../interfaces/queue.interface';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent {
  @Input() queue: QueueItem[] = [];
}
