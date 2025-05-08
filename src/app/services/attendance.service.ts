import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  filteredAttendance(user: string, subjectId: number, date: string): Observable<any> {
    // const apiUrl = `http://localhost:8091/attendance/get-attendance/${user}/${subjectId}/${date}`;
    const apiUrl = `${environment.apiBaseUrl}/attendance/get-attendance/${user}/${subjectId}/${date}`; //URL...............
    return this.http.get(apiUrl);
  }

  allAttendance(): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/attendance/get-all-attendance-records`; //URL...............
    return this.http.get(apiUrl);
  }


  saveAttendance(data: any): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/attendance/take-attendance`;  //URL...............
    return this.http.post(apiUrl, data);
  }
}
