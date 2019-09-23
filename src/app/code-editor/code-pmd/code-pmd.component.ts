import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodePmdService } from './CodePmd.service';

@Component({
  selector: 'app-code-pmd',
  templateUrl: './code-pmd.component.html',
  styleUrls: ['./code-pmd.component.css']
})
export class CodePmdComponent implements OnInit {

  userCode: string;
  pmdRep:any;
   router: Router;
  //
  

  public constructor(private PmdService: CodePmdService) {
    this.userCode = window.history.state.data;
    this.getCodePmdReport();
  
  }
  

  ngOnInit() {
    
  }

  public async getCodePmdReport() {
    console.log(this.userCode);
    this.pmdRep =( await this.PmdService.getCodePmdReport(this.userCode)).data;
    console.log("Pmd : ", this.pmdRep);
  }

 

}
