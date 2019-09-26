import { Component, OnInit, Inject, Input } from '@angular/core';
import { PmdService } from './pmd.service';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'pmd-rep',
  templateUrl: './pmd.component.html',
  styleUrls: ['./pmd.component.css']
})
export class PmdComponent implements OnInit {


 giturl: string;
  pmdRep:any;
   router: Router;
   show:boolean;
  
  

  public constructor(private PmdService: PmdService ) {
    this.giturl = window.history.state.data;
    this.getPmdReport();
  
  }
  

  ngOnInit() {
    
  }

  public async getPmdReport() {
    var start = performance.now();
    this.PmdService.getPmdReport(this.giturl).subscribe((result) => this.pmdRep = result.data);

    var end = performance.now();

    console.log("This Request takes time:" + (end - start));

  }

 
}
