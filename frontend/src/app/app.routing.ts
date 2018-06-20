import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { ComprasComponent } from './compras/compras.component';
import { NovaCompraComponent } from './compras/nova-compra/nova-compra.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'compras', component: ComprasComponent },
  { path: 'nova-compra', component: NovaCompraComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
