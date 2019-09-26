
import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class SimService{

public constructor(private http:HttpClient){

}
public getSimReport(giturl: string) {
   
    const response = this.http.post<ExpectedDataResponse>('http://localhost:8080/api/sim/', giturl);
    
    return response;
}

}
export class ExpectedDataResponse {
    data: string;
}