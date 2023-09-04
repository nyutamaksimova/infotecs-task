import { Component, OnInit } from '@angular/core';
import { EditModeService } from 'src/app/services/edit-mode.service';
import {ModalService} from 'src/app/services/modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  constructor(public modalService: ModalService,
    public EditModeService: EditModeService) { }

  ngOnInit(): void {
  }
}
