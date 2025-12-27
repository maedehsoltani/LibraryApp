import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  save() {
    this.booksService.add(this.item);
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
    this.action = 'add';
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
export interface BooksItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
