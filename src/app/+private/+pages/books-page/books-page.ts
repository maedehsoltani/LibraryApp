import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page',
  imports: [],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage {
  data: BooksItem[] = [
    { id: 1, title: 'برنامه نویسی', writer: 'خودم', publisher: 'خودم', price: 80000 },
  ]
}
export interface BooksItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
