import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './todos/list/list.component';
import { AddComponent } from './todos/add/add.component';
import { EditComponent } from './todos/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component : ListComponent
  },
  {
    path: 'add',
    component : AddComponent
  },
  {
    path: 'edit',
    component : EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
