import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiUrl = 'http://localhost:8000/api/teams';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getTeamById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createTeam(team: { name: string; city: string; league: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, team);
  }

  updateTeam(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
