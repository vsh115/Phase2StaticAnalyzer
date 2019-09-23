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
  gitobj:GithubComponent;
  simRep:any;
   router: Router;
  constructor(private SimService: SimService) { 
    this.giturl = window.history.state.data;
  }

  ngOnInit() {
    

    this.getSimReport();
  }

  public async getSimReport() {

  
    this.simRep =( await this.SimService.getSimReport(this.giturl)).data;
    console.log("Sim : ", this.simRep);
  }

}
