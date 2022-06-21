import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  feedbackUrl: string;

  constructor(private http: HttpClient) {
    this.feedbackUrl = "http://localhost:8080/api/v1/customer/" + localStorage.getItem("userId") + "/addFeedback"
    //  http://localhost:8080/api/v1/customer/99/addFeedback
  }
  sendFeedback(data: any) {
    console.log(data)
    console.log(this.feedbackUrl);
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });
    return this.http.post(this.feedbackUrl, data, { headers: httpHeaders });
  }

  addCustomerData(data: any) {
    let url = "http://localhost:8080/api/v1/login/addCustomer";
    return this.http.post(url, data);
  }

  getAllCustomers() {
    let url = "http://localhost:8080/api/v1/customer/all"
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });

    return this.http.get<any[]>(url, { headers: httpHeaders });
  }

  userProfile() {
    let url = "http://localhost:8080/api/v1/customer/single/" + localStorage.getItem('userId')
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });
    console.log(url);
    return this.http.get(url, { headers: httpHeaders });
  }


  activateCustomer(id: number) {
    let token = "Bearer " + localStorage.getItem("token");
    let url = "http://localhost:8080/api/v1/customer/" + id + "/activate";
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deactivateCustomer(id: number) {
    let token = "Bearer " + localStorage.getItem("token");
    let url = "http://localhost:8080/api/v1/customer/" + id + "/deactivate";
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
}

