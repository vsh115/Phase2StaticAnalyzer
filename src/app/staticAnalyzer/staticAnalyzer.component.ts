import {Component,Input,Output,EventEmitter, OnInit, Inject} from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({

selector: 'static-analyzer',
templateUrl:'staticAnalyzer.component.html',
styleUrls:['./staticAnalyzer.component.css']
})


export class StaticAnalyzerComponent implements OnInit{

    View:string;

    constructor(private _location: Location,@Inject(Router) private router: Router) 
  {}

  backClicked() {
    this._location.back();
  }
    ngOnInit() {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        // do your task for before route
  
        return false;
      }

      }

    changeView(view) {

          this.View= view;
      }

      gotoGithub(){

        this.router.navigate(['/github']);
      }
      gotoCodeditor(){
        this.router.navigate(['/codeEditor']);
      }
}