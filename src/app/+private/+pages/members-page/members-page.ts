import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCRUDPage<MemberItem> implements OnInit {

  override dataService = inject(MembersService);

  ngOnInit(): void {
    this.refreshData();
  };
  override addPrepair(): void {
    this.item = {
      name: '',
      family: '',
      kodmeli: '',
      phone: '',
    };
  }
}
export interface MemberItem extends Thing {
  name: string;
  family: string;
  kodmeli: string;
  phone: string;
};
