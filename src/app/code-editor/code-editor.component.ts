import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

   userCode: string;
  message:string;
  @Input() report:string;


  private _location: Location;
  public constructor(@Inject(Router) private router: Router) {


  }


  ngOnInit() {

  }

  getUserCode(code: string) {

    this.userCode = code;
    this.message = "Uploaded!!!";

  }
/*
  backClicked() {
    this._location.back();
  } */

  CheckStyleClick = function () {

    this.router.navigate(['/Codecs'], { state: { data: this.userCode } });
  }
  PmdClick = function () {
    this.router.navigate(['/Codepmd'], { state: { data: this.userCode } });
  }
  SimianClick = function () {
    this.router.navigate(['/Codesim'], { state: { data: this.userCode } });
  }
  AllClick = function () {
    this.router.navigate(['/Codeall'], { state: { data: this.userCode } });
  }

}
