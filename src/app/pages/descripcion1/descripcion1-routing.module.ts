import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Descripcion1Page } from './descripcion1.page';

const routes: Routes = [
  {
    path: '',
    component: Descripcion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Descripcion1PageRoutingModule {}
