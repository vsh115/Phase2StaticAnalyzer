

import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class CodeSimService{

public constructor(private http:HttpClient){

}
public getSimReport(usercode: string) {
    const response = this.http.post<ExpectedDataResponse>('http://localhost:8080/api/code/sim/', usercode);
    
    return response;
}

}
export class ExpectedDataResponse {
    data: string;
}