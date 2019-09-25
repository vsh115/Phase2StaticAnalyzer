import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PmdService } from './pmd.service';


@NgModule({
declarations:[],
imports:[CommonModule,HttpClientModule,FormsModule],
exports:[],
providers:[PmdService]
})

export class PmdModule{
}