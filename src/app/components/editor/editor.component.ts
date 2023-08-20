import { Component, OnInit, Input } from "@angular/core";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import { ToolConstructable } from '@editorjs/editorjs';
// @ts-ignore
const edjsHTML = require("editorjs-html");
import { notes } from 'src/app/data/notes';
import { INote } from 'src/app/models/inote';
// @ts-ignore
import Underline from '@editorjs/underline';
import { EditModeService } from "src/app/services/edit-mode.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {

  @Input() note!: INote;

  editor: any;
  edjsParser = edjsHTML();

  constructor(public EditModeService: EditModeService) { }

  ngOnInit(): void {
    this.editor = new EditorJS( {
      autofocus: true,
      holderId: 'editor',
      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          inlineToolbar: ['link', 'bold', 'italic']
        },
        Underline: Underline
      },
      data: this.note.forEditor
    });
    }
    
  EditOnSave() {
    
    this.editor
      .save()
      .then((outputData: any) => {
        const html = this.edjsParser.parse(outputData).join("");
        
        let editNote : INote  = {
          editTime: new Date(),
          uploadTime: this.note.uploadTime,
          text: html as string,
          forEditor:outputData,
        }
        notes.splice(notes.indexOf(this.note), 1);
        notes.push(editNote)
              
      })
      .catch((error: any) => {
        console.log("Saving failed: ", error);
      });
  }
 

}
