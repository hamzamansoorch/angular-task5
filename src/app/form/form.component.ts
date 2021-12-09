import { analyzeAndValidateNgModules, ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  userForm: FormGroup
  listdata: any
  contentEditable: boolean = false;
  edit = false;
  selectedItem: any;


  constructor(private fb: FormBuilder, private router: Router, private shared: SharedService) {


    this.listdata = [];
    this.userForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', Validators.required],


    })
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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

  btnClick(item: any) {

    this.selectedItem = item;
    this.shared.communicate(this.selectedItem);
    this.router.navigateByUrl('/display-component');






  }



  ngOnInit(): void {
    //this.shared.setData(this.selectedItem);



  }



}


