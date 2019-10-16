import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'products', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'products/new', loadChildren: './pages/products/new/new.module#NewPageModule' },
  { path: 'products/:id', loadChildren: './pages/products/show/show.module#ShowPageModule' },
  { path: 'customers', loadChildren: './pages/customers/customers.module#CustomersPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
