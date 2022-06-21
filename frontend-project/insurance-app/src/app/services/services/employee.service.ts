import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addAgentData(data: any) {
    let url = "http://localhost:8080/api/v1/agent/addAgent"
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });
    console.log(data);
    return this.http.post(url, data, { headers: httpHeaders });
  }

  getAllAgent() {
    let url = "http://localhost:8080/api/v1/agent/all"
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });

    return this.http.get<any[]>(url, { headers: httpHeaders });
  }

  getAllEmployees() {
    let url = "http://localhost:8080/api/v1/employee/all"
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });

    return this.http.get<any[]>(url, { headers: httpHeaders });
  }

  getEmployeeById(id: number): any {
    let url = "http://localhost:8080/api/v1/employee/single" + id
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });

    return this.http.get<any>(url, { headers: httpHeaders });
  }

  activateEmployee(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id+"/activate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deactivateEmployee(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id+"/deactivate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
}
