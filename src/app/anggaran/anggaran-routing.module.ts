import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnggaranComponent } from './add-anggaran/add-anggaran.component';
import { BerandaComponent } from './beranda/beranda.component';
import { EditAnggaranComponent } from './edit-anggaran/edit-anggaran.component';

const routes: Routes = [{
  path: 'anggaran/beranda',
  component: BerandaComponent
},
{
  path: 'anggaran/add-anggaran',
  component: AddAnggaranComponent
},
{
  path: 'anggaran/edit-anggaran/:id',
  component: EditAnggaranComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnggaranRoutingModule { }
