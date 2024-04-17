import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Tienda Narala | Productos de Belleza, Cosmética y Cuidado Personal'
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
    title: 'Productos | Tienda Narala'
  },{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
