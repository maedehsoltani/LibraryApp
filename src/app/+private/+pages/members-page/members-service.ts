import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseCRUDService<MemberItem> {
  override data: MemberItem[] = [
    { id: 1, name: 'زهرا', family: 'رضایی', kodmeli: '4052111236', phone: '09165412360' },
    { id: 2, name: 'علی', family: 'حیدری', kodmeli: '4052641254', phone: '09145361110' },
  ];
}
