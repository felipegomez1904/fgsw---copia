import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreedsPageRoutingModule } from './breeds-routing.module';

import { BreedsPage } from './breeds.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BreedsPage]
})
export class BreedsPageModule {}
