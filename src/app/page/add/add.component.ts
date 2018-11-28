import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public product = {
    sku: '',
    name: '',
    description: '',
    price: '',
    date: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.product);
  }
}
