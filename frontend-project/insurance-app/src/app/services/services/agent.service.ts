import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }
  
  getAgents() {
    let url = "http://localhost:8080/api/v1/agent"
    let token = "Bearer " + localStorage.getItem("token")
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getNumberOfAgents() {
    let length: number;
    return this.getAgents().subscribe(data =>
      console.log(data.length))
  }
}
