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
    console.log(this.giturl);
    this.pmdRep =( await this.PmdService.getPmdReport(this.giturl)).data;
    console.log("Pmd : ", this.pmdRep);
    if(this.pmdRep)
    {
    
      this.show=true;
    }
    else{
      alert("Cannot Generate Report: either gitrepo is Wrong or there are no files present");
      this.router.navigate(['/github']);
    }

  }

 
}
