import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmdComponent } from './pmdTool/pmd.component';
import { CsComponent } from './chechStyleTool/cs.component';
import { SimComponent } from './simianTool/sim.component';
import { AllComponent } from './allTools/all.component';
import { GithubComponent } from './github/github.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { CodeCsComponent } from './code-editor/code-cs/code-cs.component';
import { CodePmdComponent } from './code-editor/code-pmd/code-pmd.component';
import { CodeSimComponent } from './code-editor/code-sim/code-sim.component';
import { CodeAllComponent } from './code-editor/code-all/code-all.component';


const routes: Routes = [{path:'pmd',component:PmdComponent},
{path:'cs',component:CsComponent},
{path:'sim',component:SimComponent},
{path:'all',component:AllComponent},
{path:'github',component:GithubComponent},
{path:'codeEditor',component:CodeEditorComponent},
{path:'Codecs',component:CodeCsComponent},
{path:'Codepmd',component:CodePmdComponent},
{path:'Codesim',component:CodeSimComponent},
{path:'Codeall',component:CodeAllComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
