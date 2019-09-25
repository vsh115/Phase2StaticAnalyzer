import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticAnalyzerModule } from './staticAnalyzer/staticAnalyzer.module';
import { CsComponent } from './checkStyleTool/cs.component';
import { SimComponent } from './simianTool/sim.component';
import { GithubComponent } from './github/github.component';
import { AllComponent } from './allTools/all.component';
import { RouterModule } from '@angular/router';
import { CodeCsComponent } from './code-editor/code-cs/code-cs.component';
import { CodePmdComponent } from './code-editor/code-pmd/code-pmd.component';
import { CodeSimComponent } from './code-editor/code-sim/code-sim.component';
import { CodeAllComponent } from './code-editor/code-all/code-all.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { LoaderService } from './loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { CheckIfHomePageIsPassed } from './app.guard';

@NgModule({
  declarations: [
    AppComponent,
    SimComponent,
    AllComponent,
    CodeCsComponent,
    CodePmdComponent,
    CodeSimComponent,
    CodeAllComponent,
    LoaderComponent, 
    GithubComponent,
    CsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule, StaticAnalyzerModule, RouterModule,MatProgressSpinnerModule
  ],
  providers: [LoaderService,{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, CheckIfHomePageIsPassed ],
  bootstrap: [AppComponent]
})
export class AppModule { }
