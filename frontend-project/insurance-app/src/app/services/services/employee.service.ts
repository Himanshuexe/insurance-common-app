import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  addAgentData(data:any){
    console.log(data);
  }
}
