// редактор для добавления записей
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
  edjsParser = edjsHTML(); // парсер для преобразования данных в html

  constructor(public ModalService: ModalService){
  }

 ngOnInit(): void {
  this.editor = new EditorJS( {
    autofocus: true,
    holderId: 'editor-js',
    tools: {
      header: {
        class: Header as unknown as ToolConstructable,
        inlineToolbar: ['link', 'bold', 'italic'] // жирный шрифт, курсив
      },
      Underline: Underline // нижнее подчеркивание
    }
  });
  }

 // функция для сохранения новой записи
  onSave() {
    this.editor
      .save()
      .then((outputData: any) => {
        const html = this.edjsParser.parse(outputData).join(""); // преобразование данных в html
        
        // новая запись
        let newNote : INote  = {
          uploadTime: new Date(),
          text: html as string,
          forEditor:outputData
        }

        // добавление новой записи в список
        notes.push(newNote)
      })
      .catch((error: any) => {
        console.log("Saving failed: ", error);
      });
  }
}