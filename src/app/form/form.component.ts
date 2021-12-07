import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup
  listdata: any
  contentEditable: boolean = false;
  edit = false;

  constructor(private fb: FormBuilder) {
    this.listdata = [];
    this.userForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', Validators.required],

    })
  }
  public addItem(): void {
    this.listdata.push(this.userForm.value);
    this.userForm.reset();
  }
  public reset(): void {
    this.userForm.reset();


  }
  selectDiv(): void {
    this.edit = !this.edit;
    this.contentEditable = this.edit;



  }
  removeItem(element: any) {
    this.listdata.forEach((value: any, index: any) => {
      if (value == element) {
        this.listdata.splice(index, 1);
      }
    });
  }
  ngOnInit() {

  }

}
