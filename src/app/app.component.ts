import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('loop', [
      state(
        'open',
        style({
          transform: 'rotate(0)',
        })
      ),
      state(
        'close',
        style({
          transform: 'rotate(1turn)',
        })
      ),
      transition('open => close', [animate('5s')]),
      transition('close => opne', [animate('0s')]),
      // transition(':enter', [
      //   style({ transform: 'rotate(0)' }),
      //   animate('5s', style({ transform: 'rotate(1turn)' })),
      // ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public animState: boolean;

  constructor() {
    this.animState = true;
  }

  public animDone(): void {
    this.animState = !this.animState;
  }

  public ngOnInit(): void {
    if (Worker) {
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    }
  }
}
