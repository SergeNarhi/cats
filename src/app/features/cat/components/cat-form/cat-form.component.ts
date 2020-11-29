import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cat } from '../../interfaces/cat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss'],
})
export class CatFormComponent implements OnInit {
  @Input() cat: Cat | null | undefined;
  @Input() cat$: Observable<Cat> | undefined;
  @Output() save = new EventEmitter();
  @Output() remove = new EventEmitter();

  catForm: FormGroup = this.fb.group({
    _id: [null],
    name: [null, Validators.required],
    description: [null, Validators.required],
    img: [null, Validators.required],
    like: 0,
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.cat$?.subscribe((cat) => this.catForm.patchValue(cat || {}));
  }

  onSave(): void {
    this.save.emit(this.catForm.value);
  }

  csvInputChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.catForm.patchValue({ img: reader.result });
    };
  }
}
