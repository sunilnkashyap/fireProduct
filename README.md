# FireProducts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.


# Running App!

Install the dependencies and devDependencies and start the server.

```sh
$ cd fireProduct
$ npm install -d
$ ng serve -o
```

### Configuration
To run this app you need to configure server url.
server URL is present in environment file
```sh
fireProduct/src/environment.ts

export const environment = {
  production: false,
  serverURI: 'http://localhost:8000', // you need to change this according to your server
  serverAPI: 'http://localhost:8000/api/', // this is api url of server
  /* this is just for future development */
  firebase: {
    apiKey: 'XXXXXXXXXX',
    authDomain: 'XXXXXXXXXX',
    databaseURL: 'XXXXXXXXXX',
    projectId: 'XXXXXXXXXX',
    storageBucket: 'XXXXXXXXXX',
    messagingSenderId: 'XXXXXXXXXX'
  }
};
```
Laravel server repo - https://github.com/sunilnkashyap/laraProduct.git

