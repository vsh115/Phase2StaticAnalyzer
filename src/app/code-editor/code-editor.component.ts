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
  clearmessage:string;
  @Input() report:string;


  private _location: Location;
  public constructor(@Inject(Router) private router: Router) {


  }


  ngOnInit() {

  }

  getUserCode(code: string) {
    this.userCode = code;
    if(this.userCode){
      this.message = "Uploaded!!!";
      
    }
    else{
      alert("Please Enter the Code to Analyze!!!");
    }
     }


  CheckStyleClick = function () {

    if(this.userCode){
      this.router.navigate(['/Codecs'], { state: { data: this.userCode } });
    }
    else{
      alert("Either Code Box is empty or you did not Upload it");
    }
    
  }
  PmdClick = function () {

    if(this.userCode){
      this.router.navigate(['/Codepmd'], { state: { data: this.userCode } });
    }
    else{
      alert("Either Code Box is empty or you did not Upload it");
    }
    
  }
  SimianClick = function () {
    if(this.userCode){
      this.router.navigate(['/Codesim'], { state: { data: this.userCode } });
    }
    else{
      alert("Either Code Box is empty or you did not Upload it");
    }

    
  }
  AllClick = function () {

    if(this.userCode){
      this.router.navigate(['/Codeall'], { state: { data: this.userCode } });
    }
    else{
      alert("Either Code Box is empty or you did not Upload it");
    }
    
  }

}
