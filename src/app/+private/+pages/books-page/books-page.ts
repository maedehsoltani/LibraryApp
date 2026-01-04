import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage extends BaseCRUDPage<BooksItem> implements OnInit {
  override dataService = inject(BooksService);

  ngOnInit(): void {
    this.refreshData();
  }

  override addPrepair(): void {
    this.item={
      publisher:'',
      title:'',
      writer:'',
    };
  }

}
export interface BooksItem extends Thing {
  title: string;
  writer: string;
  publisher: string;
  price?: number;
};
