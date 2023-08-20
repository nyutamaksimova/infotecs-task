import { Component, Input } from '@angular/core';
import {INote} from 'src/app/models/inote';
import { notes } from 'src/app/data/notes';
import { ModalService } from 'src/app/services/modal.service';
import { EditModeService } from 'src/app/services/edit-mode.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {

  constructor(public ModalService: ModalService,
    public EditModeService: EditModeService){
  }

  @Input() note!: INote;
  
  async delete(postToDelete: INote) {
    notes.splice(notes.indexOf(postToDelete), 1);
  }

}
