import { Component, OnInit } from "@angular/core";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import { ToolConstructable } from '@editorjs/editorjs';
// @ts-ignore
const edjsHTML = require("editorjs-html");
import { notes } from 'src/app/data/notes';
import { INote } from 'src/app/models/inote';
// @ts-ignore
import Underline from '@editorjs/underline';
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-addeditor",
  templateUrl: "./addeditor.component.html",
  styleUrls: ["./addeditor.component.scss"],
})

export class AddEditorComponent implements OnInit {
  
  editor: any;
  edjsParser = edjsHTML();

  constructor(public ModalService: ModalService){
  }

 ngOnInit(): void {
  this.editor = new EditorJS( {
    autofocus: true,
    holderId: 'editor-js',
    tools: {
      header: {
        class: Header as unknown as ToolConstructable,
        inlineToolbar: ['link', 'bold', 'italic']
      },
      Underline: Underline
    },
    data : {time: 1692550121549, 
            blocks: [{
              data: {text: 'Введите запись'},
              id: "Hjckaogn1Q",
              type: "paragraph"
            }
            ],
            version: '2.27.2'}
  });
  }

 
  onSave() {
    this.editor
      .save()
      .then((outputData: any) => {
        const html = this.edjsParser.parse(outputData).join("");
        
        let newNote : INote  = {
          uploadTime: new Date(),
          text: html as string,
          forEditor:outputData
        }
        notes.push(newNote)
           
      })
      .catch((error: any) => {
        console.log("Saving failed: ", error);
      });
  }
}