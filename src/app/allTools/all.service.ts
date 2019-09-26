import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class AllService{

public constructor(private http:HttpClient){

}
public async getAllReport(giturl: string) {
    const response = await this.http.post<ExpectedDataResponse>('http://localhost:8080/api/all', giturl).toPromise();
    console.log("In Service : ", response);
    return response;
}

}
export class ExpectedDataResponse {
    data: string;
}