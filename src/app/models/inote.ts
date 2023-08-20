export interface INote {
    uploadTime: Date; // дата загрузки
    editTime? : Date; // дата редактирования
    text: string; // текст записи
    img?: string; // изображение (не реализовано на данный момент)
    forEditor: any; // информация, подающаяся на вход редактору
}
