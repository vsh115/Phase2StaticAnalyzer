import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from './all.service';
import { GithubComponent } from '../github/github.component';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  providers: [AllService]
})
export class AllComponent implements OnInit {

  
  giturl: string; 
  gitobj:GithubComponent;
  allRep:any;
   router: Router;
  constructor(private allService: AllService) {
    this.giturl = window.history.state.data;
   }

  ngOnInit() {
  
    this.getAllReport();
  }

  public async getAllReport() {

  
    this.allRep =( await this.allService.getAllReport(this.giturl)).data;
    console.log("All : ", this.allRep);
  }
}
