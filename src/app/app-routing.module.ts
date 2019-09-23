import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmdComponent } from './pmdTool/pmd.component';
import { CsComponent } from './chechStyleTool/cs.component';
import { SimComponent } from './simianTool/sim.component';
import { AllComponent } from './allTools/all.component';
import { GithubComponent } from './github/github.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';


const routes: Routes = [{path:'pmd',component:PmdComponent},
{path:'cs',component:CsComponent},
{path:'sim',component:SimComponent},
{path:'all',component:AllComponent},
{path:'github',component:GithubComponent},
{path:'codeEditor',component:CodeEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
