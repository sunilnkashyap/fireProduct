import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

// importing product service
import { ProductService } from '../../services/product.service';

// importing jQuery :: for testing
import * as $ from 'jquery';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  // Product schema :: TODO: Interface
  public product = {
    sku: '',
    name: '',
    description: '',
    price: '',
    date: '',
    image: ''
  };

  constructor(
    private productService: ProductService, // object of service
    private router: Router
  ) { }

  ngOnInit() {
  }

  // process image and put img into product object
  processImage(e) {
    // Read file if file transfer complete
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    // image validation
    const pattern = /image-*/;
    // DOM File Reader object
    const reader = new FileReader();
    // validation check
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    // handling custom reder to _handleReaderLoaded function
    reader.onload = this._handleReaderLoaded.bind(this);
    // reading file
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    // base64 to product image
    this.product.image = reader.result;
  }

  // save product
  submitForm() {
    // service function call
    this.productService.saveProduct(this.product).subscribe( r => {
      this.router.navigate(['/']);
    });
  }

}
