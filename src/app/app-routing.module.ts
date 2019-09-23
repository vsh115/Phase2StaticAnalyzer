import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmdComponent } from './pmd/pmd.component';
import { CsComponent } from './cs/cs.component';
import { SimComponent } from './sim/sim.component';
import { AllComponent } from './all/all.component';


const routes: Routes = [{path:'pmd',component:PmdComponent},
{path:'cs',component:CsComponent},
{path:'sim',component:SimComponent},
{path:'all',component:AllComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
