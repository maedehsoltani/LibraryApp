import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';
import { BaseCrudComponent, Column } from "../../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage extends BaseCRUDPage<BooksItem> implements OnInit {
  override dataService = inject(BooksService);

  ngOnInit(): void {
    this.refreshData();
    this.item={
      publisher:'',
      title:'',
      writer:''
    }
  }

  override addPrepair(): void {
    this.item={
      publisher:'',
      title:'',
      writer:'',
    };
  }
  columns:Column[]=[
    {field:'id',title:'شناسه'},
    {field:'title',title:'عنوان'},
    {field:'writer',title:'نویسنده'},
    {field:'publisher',title:'ناشر'},
    {field:'price',title:'قیمت'},
  ];

}
export interface BooksItem extends Thing {
  title: string;
  writer: string;
  publisher: string;
  price?: number;
};
