export interface IBook {
    _id: number;
    title: string;
    price: number;
    author: string;
    genre: number;
    publicationDate: string;
    image: string;
    quantity?: number;
    bookId?:string;
  }
  