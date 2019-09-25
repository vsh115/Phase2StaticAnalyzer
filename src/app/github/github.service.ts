import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class GithubService {
    headers = new Headers();


    public constructor(private http: HttpClient) {

    }

  }
