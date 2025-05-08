import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  addSubject(subject: any): Observable<any> {
    // const apiUrl = "http://localhost:8091/subject/add-subject";
    const apiUrl = `${environment.apiBaseUrl}/subject/add-subject`; //URL...............
    return this.http.post(apiUrl, subject)

  }

  allSubjects(): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/subject/get-all-subjects`; //URL...............
    return this.http.get(apiUrl);
  }

  getSubject(id: any): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/subject/get-subject-by-id/${id}`; //URL...............
    return this.http.get(apiUrl);
  }



}
