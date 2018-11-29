import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing components
import { AddComponent } from './page/add/add.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'add', component: AddComponent }
    ]
  },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
