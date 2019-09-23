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
    if (this.userCode) {
  
    }
    else {
    alert(this.userCode);
    }

  }
  public async getCsReport() {
    this.csRep = (await this.CsService.getCsReport(this.userCode)).data;
    console.log("Cs : ", this.csRep);
  }

}
