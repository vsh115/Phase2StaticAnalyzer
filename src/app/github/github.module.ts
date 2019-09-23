import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { from } from 'rxjs';

import { PmdModule } from '../pmd/pmd.module';
import { GithubComponent } from './github.component';
import { PmdComponent } from '../pmd/pmd.component';
import { AppModule } from '../app.module';
import { CsComponent } from '../cs/cs.component';



@NgModule({
declarations:[PmdComponent,CsComponent],
imports:[CommonModule,HttpClientModule,FormsModule,PmdModule],
exports:[CsComponent],
providers:[],
bootstrap: [GithubComponent,CsComponent]
})

export class GithubModule{
}