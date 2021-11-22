import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Descripcion1PageRoutingModule } from './descripcion1-routing.module';

import { Descripcion1Page } from './descripcion1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Descripcion1PageRoutingModule
  ],
  declarations: [Descripcion1Page]
})
export class Descripcion1PageModule {}
