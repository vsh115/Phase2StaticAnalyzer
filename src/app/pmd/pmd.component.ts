import { Component, OnInit, Inject, Input } from '@angular/core';
import { PmdService } from './pmd.service';
import { Pmd } from './pmd';
import { GithubComponent } from '../github/github.component';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'pmd-rep',
  templateUrl: './pmd.component.html',
  styleUrls: ['./pmd.component.css']
})
export class PmdComponent implements OnInit {


 @Input() giturl: string;
  gitobj:GithubComponent;
  pmdRep:any;
   router: Router;
  //
  

  public constructor(private PmdService: PmdService ) {
    this.giturl = window.history.state.data;
  
  }
  

  ngOnInit() {
    
    this.getPmdReport();
  }

  public async getPmdReport() {
    console.log(this.giturl);
    this.pmdRep =( await this.PmdService.getPmdReport(this.giturl)).data;
    console.log("Pmd : ", this.pmdRep);
  }

 
}
