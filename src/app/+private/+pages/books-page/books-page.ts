import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  remove(book: BooksItem) {
    this.item = { ...book };
    this.action = 'remove';
  }
  save() {
    if (this.action == 'add') {
      this.booksService.add(this.item);
    }
    else if (this.action == 'edit') {
      this.booksService.update(this.item);
    }
    else if (this.action == 'remove') {
      this.booksService.remove(this.item);
    }
    this.refreshData();
    this.action = 'list';
  }
  cancel() {
    this.action = 'list';
  }
  ngOnInit(): void {
    this.refreshData();
  }
  add() {
    this.item = {
      id: 0,
      title: '',
      writer: '',
      publisher: '',
      price: 0
    };
    this.action = 'add';
  }
  edit(books: BooksItem) {
    this.item = { ...books };
    this.action = 'edit';
  }

  booksService = inject(BooksService);
  data: BooksItem[] = [];
  action: string = 'list';
  item: BooksItem = {
    id: 0,
    title: '',
    writer: '',
    publisher: '',
    price: 0
  };

  refreshData() {
    this.data = this.booksService.list();
  }
}
export interface BooksItem extends Thing {
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
