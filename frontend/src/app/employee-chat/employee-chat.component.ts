import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-chat',
  templateUrl: './employee-chat.component.html',
  styleUrls: ['./employee-chat.component.css']
})
export class EmployeeChatComponent implements OnInit {
  
  employees: Employee[];
  senderId:number;

  constructor(private employeeService: EmployeeService,private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getEmployees();
    this.senderId = this.route.snapshot.params['senderId'];
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => { this.employees = data.filter((employee:Employee) => employee.id!=this.senderId) });
  }

  goToActiveChatPage(receiverId: number) {
    this.router.navigate(['employee-login',this.senderId,receiverId]);
  }

}
