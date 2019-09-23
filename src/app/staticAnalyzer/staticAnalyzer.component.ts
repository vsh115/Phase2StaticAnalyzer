import {Component,Input,Output,EventEmitter, OnInit} from '@angular/core';
import {Location} from '@angular/common';


@Component({

selector: 'static-rep',
templateUrl:'staticAnalyzer.component.html',
styleUrls:['./staticAnalyzer.component.css']
})


export class StaticAnalyzerComponent implements OnInit{

    View:string;

    constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
    ngOnInit() {
        this.View= "regView1";
      }

    changeView(view) {

          this.View= view;
      }

      previousView(view) {

          this.View= view;
      }
}