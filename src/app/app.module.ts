import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticAnalyzerModule } from './staticAnalyzer/staticAnalyzer.module';
import { from } from 'rxjs';
import { CsComponent } from './chechStyleTool/cs.component';
import { SimComponent } from './simianTool/sim.component';
import { GithubComponent } from './github/github.component';
import { AllComponent } from './allTools/all.component';
import { RouterModule } from '@angular/router';
import { CodeCsComponent } from './code-editor/code-cs/code-cs.component';
import { CodePmdComponent } from './code-editor/code-pmd/code-pmd.component';
import { CodeSimComponent } from './code-editor/code-sim/code-sim.component';
import { CodeAllComponent } from './code-editor/code-all/code-all.component';




@NgModule({
  declarations: [
    AppComponent,
    SimComponent,
    AllComponent,
    CodeCsComponent,
    CodePmdComponent,
    CodeSimComponent,
    CodeAllComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule, StaticAnalyzerModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
