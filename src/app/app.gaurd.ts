
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckIfHomePageIsPassed implements CanActivate{

    constructor(private router: Router) { }

    canActivate() {
        return this.checkIfPassed();
    }

    private checkIfPassed(){
        console.log(this.router.url)
        if (this.router.url == '/github' || this.router.url == '/codeeditor'){ return true}
        else { return false};
    }
} 
 
