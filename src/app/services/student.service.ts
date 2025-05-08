import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  addStudent(student: any):Observable<any> {
    // const apiUrl='http://localhost:8091/student/add-student';
    const apiUrl=`${environment.apiBaseUrl}/student/add-student`;
    return this.http.post(apiUrl, student);
  }

  allStudent():Observable<any> {
    const apiUrl=`${environment.apiBaseUrl}/student/get-all-students`; //URL...............
    return this.http.get(apiUrl);
  }

  getStudentById(id: number):Observable<any> {
    const apiUrl=`${environment.apiBaseUrl}/student/get-student-by-id/`+id; //URL...............
    return this.http.get(apiUrl);
  }

  updateStudent(student: any):Observable<any> {
    const apiUrl=`${environment.apiBaseUrl}/student/update-student`; //URL...............
    return this.http.put(apiUrl, student);
  }

  deleteStudent(id: number):Observable<any> {
    const apiUrl=`${environment.apiBaseUrl}/student/delete-student/`+id; //URL...............
    return this.http.delete(apiUrl,{responseType: 'text'});
  }

}
