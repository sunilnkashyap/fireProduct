// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* Sample firebase account only for demo. */
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD7luAbzpE6lQY852Okx5MO70F_8dnjdOM",
    authDomain: "fireproduct-angular.firebaseapp.com",
    databaseURL: "https://fireproduct-angular.firebaseio.com",
    projectId: "fireproduct-angular",
    storageBucket: "fireproduct-angular.appspot.com",
    messagingSenderId: "608063681165"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
