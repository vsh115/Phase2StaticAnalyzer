import { Component, OnInit } from '@angular/core';
import { GithubComponent } from '../github/github.component';
import { Router } from '@angular/router';
import { SimService } from './sim.service';


@Component({
  selector: 'app-sim',
  templateUrl: './sim.component.html',
  styleUrls: ['./sim.component.css']
})
export class SimComponent implements OnInit {


  giturl: string;
   simRep:any;
   router: Router;
  constructor(private SimService: SimService) { 
    this.giturl = window.history.state.data;
    this.getSimReport();
  }

  ngOnInit() {
    

   
  }

  public async getSimReport() {

  
    var start = performance.now();
    this.SimService.getSimReport(this.giturl).subscribe((result) => this.simRep = result.data);

    var end = performance.now();

    console.log("This Request takes time:" + (end - start));

  }

}
