import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class GithubService {
    headers = new Headers();


    public constructor(private http: HttpClient) {

    }

    /* public async getPmdReport(giturl: string) {
        const response = await this.http.post<ExpectedDataResponse>('http://localhost:8080/api/pmd/', giturl).toPromise();
        console.log("In Service : ", response);
        return response;
    } */

}
/* export class ExpectedDataResponse {
    data: string;
} */