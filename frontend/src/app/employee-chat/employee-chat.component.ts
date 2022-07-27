import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-chat',
  templateUrl: './employee-chat.component.html',
  styleUrls: ['./employee-chat.component.css']
})
export class EmployeeChatComponent implements OnInit {
  
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }


  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => { this.employees = data });
  }

}
