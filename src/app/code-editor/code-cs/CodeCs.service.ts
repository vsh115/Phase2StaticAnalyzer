import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class CodeCsService{

public constructor(private http:HttpClient){

}
public  getCsReport(userCode: string) {
   
    const response = this.http.post<ExpectedDataResponse>('http://localhost:8080/api/code/cs/', userCode);
    
    return response;
}

}
export class ExpectedDataResponse {
    data: string;
}