import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../../interfaces/cat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent {
  @Input() cats: Cat[] | null | undefined;
  @Output() like = new EventEmitter();
  @Output() unlike = new EventEmitter();

  constructor(private readonly router: Router) {}

  openCatForm(id: string): void {
    this.router.navigate(['/cats', id]);
  }

  onLike(id: string): void {
    this.like.emit(id);
  }

  onUnlike(id: string): void {
    this.unlike.emit(id);
  }
}
