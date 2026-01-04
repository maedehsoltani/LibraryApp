import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {
  
  remove(member: MemberItem) {
    this.item = { ...member };
    this.action = 'remove';
  }
  edit(members: MemberItem) {
    this.item = { ...members };
    this.action = 'edit';
  }
  save() {
    if (this.action == 'add') {
      this.membersService.add(this.item);
    }
    else if (this.action == 'edit') {
      this.membersService.update(this.item);
    }
    else if (this.action == 'remove') {
      this.membersService.remove(this.item);
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
      name: '',
      family: '',
      kodmeli: '',
      phone: ''
    };
    this.action = 'add';
  }
  membersService = inject(MembersService);
  data: MemberItem[] = []
  action: string = 'list';
  item: MemberItem = {
    id: 0,
    name: '',
    family: '',
    kodmeli: '',
    phone: ''
  };
  refreshData() {
    this.data = this.membersService.list();
  }
}
export interface MemberItem extends Thing {
  name: string;
  family: string;
  kodmeli: string;
  phone: string;
}
