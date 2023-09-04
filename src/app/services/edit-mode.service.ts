// Сервис, контролирующий режим редактирования записей. 

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Input } from '@angular/core';
import { INote } from '../models/inote';

@Injectable({
  providedIn: 'root'
})
export class EditModeService {

  constructor() { }

  @Input() note!: INote;

  editMode$ = new BehaviorSubject<boolean>(false)

  open(_note: INote) {
    this.editMode$.next(true)
    this.note = _note
  }

  close() {
    this.editMode$.next(false)
  }
}
