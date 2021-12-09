import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {
  itemList: any
  messageFromForm: any
  constructor(private shared: SharedService) { }

  ngOnInit() {
    //this.itemList = this.shared.getItem();
    this.shared.sendTableData.subscribe(message => {
      this.messageFromForm = message;

    })
  }

}
