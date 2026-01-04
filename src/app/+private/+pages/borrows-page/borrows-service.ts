import { Injectable } from '@angular/core';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';
import { Borrowitem } from './borrows-page';

@Injectable({
  providedIn: 'root',
})
export class BorrowsService extends BaseCRUDService<Borrowitem> {
   override data=[
  ];
}
