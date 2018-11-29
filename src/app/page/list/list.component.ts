import { Component, OnInit } from '@angular/core';

// importing product service
import { ProductService } from '../../services/product.service';

// constants
import { environment } from '../../../environments/environment';

import {Router} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  serverURI = environment.serverURI;
  products: any;
  constructor(
    private productService: ProductService, // object of service
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.listProducts().subscribe( r => {
      this.products = r;
    });
  }

  addProduct() {
    this.router.navigate(['/add']);

  }

}
