import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmdComponent } from './pmdTool/pmd.component';
import { CsComponent } from './checkStyleTool/cs.component';
import { SimComponent } from './simianTool/sim.component';
import { AllComponent } from './allTools/all.component';
import { GithubComponent } from './github/github.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { CodeCsComponent } from './code-editor/code-cs/code-cs.component';
import { CodePmdComponent } from './code-editor/code-pmd/code-pmd.component';
import { CodeSimComponent } from './code-editor/code-sim/code-sim.component';
import { CodeAllComponent } from './code-editor/code-all/code-all.component';
import { CheckIfHomePageIsPassed } from './app.guard';


const routes: Routes = [  
  {path:'github',component:GithubComponent},
  {path:'pmd',component:PmdComponent, canActivate: [CheckIfHomePageIsPassed]},
  {path:'cs',component:CsComponent, canActivate: [CheckIfHomePageIsPassed]},
  {path:'sim',component:SimComponent, canActivate: [CheckIfHomePageIsPassed]},
  {path:'all',component:AllComponent, canActivate: [CheckIfHomePageIsPassed]},
  {path:'codeeditor',component:CodeEditorComponent, canActivate: [CheckIfHomePageIsPassed]},
  {path:'Codecs',component:CodeCsComponent, canActivate: [CheckIfHomePageIsPassed]},
  {path:'Codepmd',component:CodePmdComponent, canActivate: [CheckIfHomePageIsPassed]},
  {path:'Codesim',component:CodeSimComponent, canActivate: [CheckIfHomePageIsPassed]},
  {path:'Codeall',component:CodeAllComponent, canActivate: [CheckIfHomePageIsPassed]} 
   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
