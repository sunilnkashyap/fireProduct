import { Injectable } from '@angular/core';

// http client for sending request to server.
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
    ) { }

    // saving new product
    saveProduct(product) {
      console.log(product);
      return this.http.post('//localhost:8000/api/new-product', product);
    }

    // fetching products
    listProducts() {
      return this.http.get('//localhost:8000/api/products');
    }

}
