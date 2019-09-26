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
    var start = performance.now();
    this.PmdService.getCodePmdReport(this.userCode).subscribe((result) => this.pmdRep = result.data);

    var end = performance.now();

    console.log("This Request takes time:" + (end - start));
  }

 

}
