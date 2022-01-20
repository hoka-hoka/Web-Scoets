import {
  Component,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() amount: number = 0;

  @Output() calculateEvent = new EventEmitter<number>();

  calculateClick(): void {
    this.calculateEvent.emit((this.amount += 1));
  }

  ngOnInit() {
    console.log('init');
  }

  ngOnChanges() {
    console.log('change');
  }

  ngDoCheck() {
    console.log('doCheck');
  }
}
