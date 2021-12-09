import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  itemList: any;
  sendTableData = new Subject();

  constructor() { }

  setData(selectedItem: any) {
    this.itemList = selectedItem;
  }


  getItem() {
    return this.itemList;
  }

  communicate(msg: any) {
    this.sendTableData.next(msg);
  }
}
