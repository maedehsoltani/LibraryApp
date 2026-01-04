import { Component, OnInit } from '@angular/core';
import { Thing } from '../../../+shared/+base/base-thing';
import { MemberItem } from '../members-page/members-page';
import { BooksItem } from '../books-page/books-page';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';

@Component({
  selector: 'app-borrows-page',
  imports: [],
  templateUrl: './borrows-page.html',
  styleUrl: './borrows-page.scss',
})

export class BorrowsPage extends BaseCRUDPage<Borrowitem> implements OnInit{
  ngOnInit(): void {
    this.refreshData();
  }

}

export interface Borrowitem extends Thing {
borrowDate:Date;
returnDate?:Date;
member:MemberItem;
book:BooksItem;
}