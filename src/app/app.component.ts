import { Component } from '@angular/core';
import { notes } from './data/notes';
import { INote } from './models/inote';
import { ModalService } from './services/modal.service';
import { EditModeService } from './services/edit-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Личный дневник';
  
  constructor(public ModalService: ModalService, 
              public EditModeService: EditModeService){
  }

  notes$ : INote[] = notes;

}
