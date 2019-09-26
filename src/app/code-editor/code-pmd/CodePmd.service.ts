
import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class CodePmdService{

public constructor(private http:HttpClient){

}
public getCodePmdReport(userCode: string) {
    const response = this.http.post<ExpectedDataResponse>('http://localhost:8080/api/code/pmd/', userCode);
    
    return response;
}

}
export class ExpectedDataResponse {
    data: string;
}