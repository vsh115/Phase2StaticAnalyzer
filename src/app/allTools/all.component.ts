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
   allRep:any;
   router: Router;
  constructor(private allService: AllService) {
    this.giturl = window.history.state.data;
    this.getAllReport();
   }

  ngOnInit() {
  
  
  }

  public async getAllReport() {
    var start = performance.now();
    this.allService.getAllReport(this.giturl).subscribe((result) => this.allRep = result.data);

    var end = performance.now();

    console.log("This Request takes time:" + (end - start));
    
  }
}
