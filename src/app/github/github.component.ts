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
  buttonDisabled: boolean;


  
  public constructor(@Inject(Router) private router: Router,private _location: Location) {


  }


  ngOnInit() {
    

  }

  getGitUrl(git: string) {

    
    this.giturl = git
    if(this.giturl){
      this.message = "Uploaded!!!";
      
    }
    else{
      alert("Please Enter Git Url");
    }
    

  }

  backClicked() {
    this._location.go("");
  }

  CheckStyleClick = function () {
    if(this.giturl){
      this.router.navigate(['/cs'], { state: { data: this.giturl } });
    }
    else{
      alert("Either Git Url is empty or you did not Upload it");
    }

    
  }
  PmdClick = function () {
    if(this.giturl){
      this.router.navigate(['/pmd'], { state: { data: this.giturl } });
    }
    else{
      alert("Either Git Url is empty or you did not Upload it");
    }
    
  }
  SimianClick = function () {
    if(this.giturl){
      this.router.navigate(['/sim'], { state: { data: this.giturl } });
    }
    else{
      alert("Either Git Url is empty or you did not Upload it");
    }
   
  }
  AllClick = function () {
    if(this.giturl){
      this.router.navigate(['/all'], { state: { data: this.giturl } });
    }
    else{
      alert("Either Git Url is empty or you did not Upload it");
    }
    
  }

}