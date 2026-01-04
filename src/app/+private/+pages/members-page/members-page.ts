import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDPage } from '../../../+shared/+base/base-page';
import { BaseCrudComponent, Column } from "../../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCRUDPage<MemberItem> implements OnInit {

  override dataService = inject(MembersService);

  ngOnInit(): void {
    this.refreshData();
    this.item = {
      name: '',
      family: '',
      kodmeli: '',
      phone: '',
    };
  };
  override addPrepair(): void {
    this.item = {
      name: '',
      family: '',
      kodmeli: '',
      phone: '',
    };
  }
  columns:Column[]=[
      {field:'id',title:'شناسه'},
      {field:'name',title:'نام'},
      {field:'family',title:'نام خانوادگی'},
      {field:'kodmeli',title:'کدملی'},
      {field:'phone',title:'تلفن'},
    ];
}
export interface MemberItem extends Thing {
  name: string;
  family: string;
  kodmeli: string;
  phone: string;
};
