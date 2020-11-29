import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cat } from '../interfaces/cat';
import * as catsData from './cats.data.json';

@Injectable({
  providedIn: 'root',
})
export class CatResourceService {
  constructor() {}

  loadCats(): Observable<Cat[]> {
    return of((catsData as any).default);
  }
}
