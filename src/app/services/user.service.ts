import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    // const apiUrl = "http://localhost:8091/user/login-user";
    const apiUrl = `${environment.apiBaseUrl}/user/login-user`; //URL...............

    return this.http.post(apiUrl, user);

  }

  registerUser(user: any): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/user/register-user`; //URL...............

    return this.http.post(apiUrl, user, { 'responseType': 'text' });

  }


  getAllUser(): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/user/get-all-user`; //URL...............
    return this.http.get(apiUrl);
  }

  getAllAdmins(): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/user/get-all-admin`; //URL...............
    return this.http.get(apiUrl);
  }

  getAllFaculty(): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/user/get-all-faculty`; //URL...............
    return this.http.get(apiUrl);
  }

  deleteUser(username: string): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/user/delete-user-by-username?username=${username}`; //URL...............
    return this.http.delete(apiUrl, { 'responseType': 'text' })
  }

  getUserByUsername(username: string): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/user/get-user-by-username/${username}`; //URL...............

    return this.http.get(apiUrl);
  }


  updateUser(user: any): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/user/update-user`; //URL...............
    return this.http.put(apiUrl, user)
  }

}
