import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'breeds',
        loadChildren: () => import('../pages/breeds/breeds.module').then(m => m.BreedsPageModule)
      },
      {
        path: 'breed',
        loadChildren: () => import('../pages/breed/breed.module').then(m => m.BreedPageModule)
      },
      {
        path: 'random',
        loadChildren: () => import('../pages/random/random.module').then(m => m.RandomPageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/breeds',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/breeds',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
