import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticAnalyzerModule } from './staticAnalyzer/staticAnalyzer.module';
import { from } from 'rxjs';
import { CsComponent } from './cs/cs.component';
import { SimComponent } from './sim/sim.component';
import { GithubComponent } from './github/github.component';
import { AllComponent } from './all/all.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    SimComponent,
    AllComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule, StaticAnalyzerModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
