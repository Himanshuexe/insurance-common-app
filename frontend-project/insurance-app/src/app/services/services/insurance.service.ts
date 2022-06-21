import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class InsuranceService {
    savedData: any = null

    constructor(private http: HttpClient) {
    }

    getInsuranceType() {
        let url = "http://localhost:8080/api/v1/insurance/insuranceType"
        return this.http.get<any[]>(url);
    }

    getInsurnacePlanList() {
        let url = "http://localhost:8080/api/v1/insurance/insurancePlan"
        return this.http.get<any[]>(url);

    }

    getInsurancePlanByTypeId(id: number) {
        let url = "http://localhost:8080/api/v1/insurance/insurancePlan/type/" + id
        return this.http.get<any[]>(url);
    }

    getInsurancePlanById(id: number) {
        let url = "http://localhost:8080/api/v1/insurance/insurancePlan/id/" + id
        return this.http.get<any>(url);
    }
    buyPolicy(data: any) {
        let url = "http://localhost:8080/api/v1/policy/addPolicy"
        const httpHeaders = new HttpHeaders({
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        return this.http.post(url, data, { headers: httpHeaders });
    }
    saveData(data: any) {
        console.log(data)
        this.savedData = data
        console.log(this.savedData)
    }

    getData(): any {
        let datatoget = this.savedData
        return datatoget
    }

    resetData() {
        this.savedData = null
    }
}