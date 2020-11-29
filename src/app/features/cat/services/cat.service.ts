import { Injectable } from '@angular/core';
import { CatResourceService } from '../resources/cat.resource.service';
import { Observable } from 'rxjs';
import { Cat } from '../interfaces/cat';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private readonly catResource: CatResourceService) {}

  loadCats(): Observable<Cat[]> {
    return this.catResource.loadCats();
  }
}
