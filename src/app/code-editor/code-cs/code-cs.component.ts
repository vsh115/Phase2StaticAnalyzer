import { Component, OnInit } from '@angular/core';
import { CodeCsService } from './CodeCs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-cs',
  templateUrl: './code-cs.component.html',
  styleUrls: ['./code-cs.component.css']
})
export class CodeCsComponent implements OnInit {

  userCode: string;
  csRep: any;
  router: Router;

  constructor(private CsService: CodeCsService) { 
    this.userCode = window.history.state.data;
    this.getCsReport();
  }

  ngOnInit() {

  }
  public async getCsReport() {
    
    var start = performance.now();
    this.CsService.getCsReport(this.userCode).subscribe((result) => this.csRep = result.data);

    var end = performance.now();

    console.log("This Request takes time:" + (end - start));
  }

}
