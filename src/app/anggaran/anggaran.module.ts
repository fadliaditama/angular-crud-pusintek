import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnggaranRoutingModule } from './anggaran-routing.module';
import { BerandaComponent } from './beranda/beranda.component';
import { AddAnggaranComponent } from './add-anggaran/add-anggaran.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BerandaComponent,
    AddAnggaranComponent
  ],
  imports: [
    CommonModule,
    AnggaranRoutingModule,
    FormsModule
  ]
})
export class AnggaranModule { }
