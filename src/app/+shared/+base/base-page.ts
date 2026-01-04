import { BaseCRUDService } from "./base-service";
import { Thing } from "./base-thing";

export class BaseCRUDPage<T extends Thing> {
    dataService!: BaseCRUDService<T>;
    data: T[] = [];
    action: string = 'list';
    item!: T;
    //  {
    //     id: 0,
    //     title: '',
    //     writer: '',
    //     publisher: '',
    //     price: 0
    // };

    // ngOnInit(): void {
    //     this.refreshData();
    // }

    refreshData() {
        this.data = this.dataService.list();
    }

    add() {
        this.addPrepair();
        this.action = 'add';
    }

    addPrepair() {

    }

    edit(i: T) {
        this.item = { ...i };
        this.action = 'edit';
    }

    remove(i: T) {
        this.item = { ...i };
        this.action = 'remove';
    }
    save() {
        if (this.action == 'add') {
            this.dataService.add(this.item);
        }
        else if (this.action == 'edit') {
            this.dataService.update(this.item);
        }
        else if (this.action == 'remove') {
            this.dataService.remove(this.item);
        }
        this.refreshData();
        this.action = 'list';
    }
    cancel() {
        this.action = 'list';
    }

}