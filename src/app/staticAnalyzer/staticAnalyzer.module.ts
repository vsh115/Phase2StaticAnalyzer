import { NgModule } from '@angular/core';
import { StaticAnalyzerComponent } from './staticAnalyzer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { from } from 'rxjs';
import { GithubComponent } from '../github/github.component';
import { CodeEditorComponent } from '../code-editor/code-editor.component';
import { GithubModule } from '../github/github.module';





@NgModule({
    declarations: [StaticAnalyzerComponent, GithubComponent,CodeEditorComponent],
    imports: [CommonModule, HttpClientModule, FormsModule, GithubModule],
    exports: [StaticAnalyzerComponent, GithubComponent,CodeEditorComponent],
    providers: []
})

export class StaticAnalyzerModule {
}