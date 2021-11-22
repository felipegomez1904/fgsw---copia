import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreedPageRoutingModule } from './breed-routing.module';

import { BreedPage } from './breed.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BreedPage]
})
export class BreedPageModule {}
