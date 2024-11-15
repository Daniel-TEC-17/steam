import { Routes } from '@angular/router';
import { HomePageComponent } from './games/pages/home-page/home-page.component';
import { GamePageComponent } from './games/pages/game-page/game-page.component';
import { WishlistPageComponent } from './games/pages/wishlist-page/wishlist-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'browse',
    children: [
      {
        path: ':id',
        component: GamePageComponent,
      },
      {
        path: '**',
        redirectTo: 'browse/1',
      },
    ],
  },
  {
    path: 'wishlist',
    component: WishlistPageComponent
  },
  //   {
  //     path: 'cart',
  //     // TODO:
  //   },
  //   {
  //     path: 'wishlist',
  //   },
  //   {
  //     path: 'profile',
  //   },
  //   {
  //     path: 'login',
  //   },
  //   {
  //     path: 'register',
  //   },
  //   {
  //     path: 'checkout',
  //   },
  //   {
  //     path: 'administrate',
  //   },
  {
    path: '**',
    redirectTo: 'home',
  },
];
