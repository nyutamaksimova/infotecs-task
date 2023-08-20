export interface INote {
    uploadTime: Date;
    editTime? : Date;
    text: string;
    img?: string;
    forEditor?: any;
}
