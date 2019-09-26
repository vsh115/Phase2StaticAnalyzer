import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class CsService{

public constructor(private http:HttpClient){

}
public async getCsReport(giturl: string) {
    const response = await this.http.post<ExpectedDataResponse>('http://localhost:8080/api/cs/', giturl).toPromise();
    
    return response;
}

}
export class ExpectedDataResponse {
    data: string;
}