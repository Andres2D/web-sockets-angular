import { Action } from '../interfaces/action.interface';

export const masterQueueActions: Action[] = [
  {
    id: 'to_turn',
    label: 'Call',
    style: 'success'
  }
];

export const turnQueueActions: Action[] = [
  {
    id: 'exit',
    label: 'Finish',
    style: 'danger'
  }
];
