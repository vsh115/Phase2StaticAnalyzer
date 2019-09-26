import { Component, OnInit } from '@angular/core';
import { GithubComponent } from '../github/github.component';
import { Router } from '@angular/router';
import { CsService } from './cs.service';

@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html',
  styleUrls: ['./cs.component.css']
})
export class CsComponent implements OnInit {

  loading = false;
  giturl: string;
  csRep: any;
  router: Router;
  
  
  constructor(private CsService: CsService) { 
    this.giturl = window.history.state.data;
    this.getCsReport();
  }

  ngOnInit() {
    
  }
  public async getCsReport() {

    var start=performance.now();
    this.csRep = (await this.CsService.getCsReport(this.giturl)).data;

     var end=performance.now();

   console.log("This Request takes time:"+(end-start));

  }

}
