import { Component, OnInit, Inject } from '@angular/core';
import { Github } from './github';
import { GithubService } from './github.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'git-hub',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {


  giturl: string;
  message: string;

  // pmdRep: any;
  //gitobj:GithubComponent=new GithubComponent();

  private _location: Location;
  public constructor(@Inject(Router) private router: Router) {


  }



  /* public async getPmdReport(view, git: string) {

    this.giturl=git;
    this.View = view;
    this.pmdRep =( await this.GithubService.getPmdReport(git)).data;
    console.log("Pmd : ", this.pmdRep);
  } */


  ngOnInit() {

  }

  getGitUrl(git: string) {

    this.giturl = git
    this.message = "Uploaded!!!";

  }

  backClicked() {
    this._location.back();
  }

  btn1Click = function () {
    this.router.navigate(['/cs'], { state: { data: this.giturl } });
  }
  btn2Click = function () {
    this.router.navigate(['/pmd']);
  }
  btn3Click = function () {
    this.router.navigate(['/sim']);
  }
  btn4Click = function () {
    this.router.navigate(['/all']);
  }

}