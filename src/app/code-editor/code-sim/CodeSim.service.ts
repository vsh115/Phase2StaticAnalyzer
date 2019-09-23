

import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class CodeSimService{

public constructor(private http:HttpClient){

}
public async getSimReport(usercode: string) {
    const response = await this.http.post<ExpectedDataResponse>('http://localhost:8080/api/sim/', usercode).toPromise();
    console.log("In Service : ", response);
    return response;
}

}
export class ExpectedDataResponse {
    data: string;
}