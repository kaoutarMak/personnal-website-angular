import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GetResumeService {

  constructor(private http:HttpClient) { }

  // Uses http.get() to load data from a single API endpoint
  getData() {
    return this.http.get('https://guarded-ocean-39521.herokuapp.com/api/v1/myResume', httpOptions);
  }
  postContactMe(data: any) {
    return this.http.post('https://guarded-ocean-39521.herokuapp.com/api/v1/contactMe', data, httpOptions);
  }
}
