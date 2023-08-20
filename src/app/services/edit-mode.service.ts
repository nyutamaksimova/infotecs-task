import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditModeService {

  constructor() { }

  editMode$ = new BehaviorSubject<boolean>(false)

  open() {
    this.editMode$.next(true)
  }

  close() {
    this.editMode$.next(false)
  }
}
