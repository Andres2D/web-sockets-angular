import { QueueItem } from './queue.interface';

export interface Action {
  id: string;
  label: string;
  style: string;
}

export interface ActionOutput {
  id: string;
  item: QueueItem;
}
