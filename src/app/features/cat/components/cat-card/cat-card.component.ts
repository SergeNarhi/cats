import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../../interfaces/cat';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
})
export class CatCardComponent {
  @Input() cat: Cat | null | undefined;
  @Output() like = new EventEmitter();
  @Output() unlike = new EventEmitter();
  @Output() select = new EventEmitter();

  constructor() {}

  onLike($event: Event): void {
    $event.stopPropagation();
    this.like.emit(this.cat && this.cat._id);
  }

  onUnlike($event: Event): void {
    $event.stopPropagation();
    this.unlike.emit(this.cat && this.cat._id);
  }

  onSelect(): void {
    this.select.emit(this.cat && this.cat._id);
  }
}
