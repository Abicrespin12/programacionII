import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbigailComponent } from './pages/abigail/abigail.component';
import { FamiliaComponent } from './pages/familia/familia.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LogrosComponent } from './pages/logros/logros.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'',component:InicioComponent},
  {path:'familia',component:FamiliaComponent},
  {path:'logros',component:LogrosComponent},
  {path:'abigail',component:AbigailComponent},
  {path:'trabajos',component:TrabajosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
