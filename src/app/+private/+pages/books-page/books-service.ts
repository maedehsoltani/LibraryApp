import { Injectable } from '@angular/core';
import { BooksItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data: BooksItem[] = [
    { id: 1, title: 'برنامه نویسی', writer: 'خودم', publisher: 'خودم', price: 80000 },
    { id: 2, title: 'برنامه نویسی پیشرفته', writer: 'خودم', publisher: 'خودم', price: 180000 },
    { id: 3, title: 'برنامه نویسی وب', writer: 'خودم', publisher: 'خودم', price: 280000 },
  ]
  add(book:BooksItem) {  //create
    this.data.push(book);
  }

  list(){  //read
    return [...this.data]
  }

  update(){  //update
     
  }

  remove(){  //remove

  }
}
