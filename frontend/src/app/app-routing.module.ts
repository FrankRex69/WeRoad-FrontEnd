import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'list-item',
    loadChildren: () => import('./list-item/list-item.module').then( m => m.ListItemPageModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'travels',
    loadChildren: () => import('./travels/travels.module').then( m => m.TravelsPageModule)
  },
  {
    path: 'travels-buy',
    loadChildren: () => import('./travels-buy/travels-buy.module').then( m => m.TravelsBuyPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
