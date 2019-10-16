import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomersPage } from './customers.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage
  },

  { path: 'new', loadChildren: './pages/customers/new/new.module#NewPageModule' },
  { path: 'edit/:id', loadChildren: './pages/customers/edit/edit.module#EditPageModule' },
  { path: ':id', loadChildren: './pages/customers/show/show.module#ShowPageModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
