import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: MemberItem[] = [
    { id: 1, name: 'زهرا', family: 'رضایی', kodmeli: '4052111236', phone: '09165412360' },
    { id: 2, name: 'علی', family: 'حیدری', kodmeli: '4052641254', phone: '09145361110' },
  ];

  add(members: MemberItem) {
    this.data.push(members);
  }
  list() {
    return [...this.data]
  }
  update(members: MemberItem) {  
      const index = this.data.findIndex(b => b.id == members.id);
      if (index != -1) {
        this.data[index].name = members.name;
        this.data[index].family = members.family;
        this.data[index].kodmeli = members.kodmeli;
        this.data[index].phone = members.phone;
      }
    }
  
    remove(members: MemberItem) {  
      this.data = this.data.filter(m => m.id != members.id);
    }
}
