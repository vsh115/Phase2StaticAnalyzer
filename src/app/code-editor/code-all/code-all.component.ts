import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeAllService } from './codeAll.service';

@Component({
  selector: 'app-code-all',
  templateUrl: './code-all.component.html',
  styleUrls: ['./code-all.component.css']
})
export class CodeAllComponent implements OnInit {

  userCode: string;
  allRep: any;
  router: Router;

  constructor(private AllService: CodeAllService) { 
    this.userCode = window.history.state.data;
    this.getAllReport();
  }

  ngOnInit() {
    

  }
  public async getAllReport() {
    var start = performance.now();
    this.AllService.getAllReport(this.userCode).subscribe((result) => this.allRep = result.data);

    var end = performance.now();

    console.log("This Request takes time:" + (end - start));
  }

}
