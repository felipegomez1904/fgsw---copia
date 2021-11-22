import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'breeds',
    loadChildren: () => import('./pages/breeds/breeds.module').then( m => m.BreedsPageModule)
  },
  {
    path: 'breed',
    loadChildren: () => import('./pages/breed/breed.module').then( m => m.BreedPageModule)
  },
  {
    path: 'random',
    loadChildren: () => import('./pages/random/random.module').then( m => m.RandomPageModule)
  },
  {
    path: 'descripcion1',
    loadChildren: () => import('./pages/descripcion1/descripcion1.module').then( m => m.Descripcion1PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
