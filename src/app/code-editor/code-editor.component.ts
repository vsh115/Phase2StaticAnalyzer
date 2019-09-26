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
      this.message = "Uploaded!";
      
    }
    else{
      alert("Please Enter the Code to Analyze!!!");
    }
     }

     ButtonClick = function (tool:string) {
      if(this.userCode){
        this.router.navigate([tool], { state: { data: this.userCode } });
      }
      else{
        alert("Either Git Url is empty or you did not Upload it");
      }
    }

}
