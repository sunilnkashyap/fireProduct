import { Injectable } from '@angular/core';

// http client for sending request to server.
import { HttpClient } from '@angular/common/http';

// constants
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient // client
    ) { }

    // saving new product
    saveProduct(product) {
      return this.http.post( environment.serverAPI + 'new-product', product); // add-new-product
    }

    // fetching products
    listProducts() {
      return this.http.get(environment.serverAPI + 'products'); // product-list
    }

}
