import { Employee } from '../../shared/model/employee';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) {
      this.employee = new Employee();
  }

  ngOnInit() {
  }

  setEmployeeRole(role: HTMLElement) {
    this.employee.role = role.innerHTML;
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.save(this.employee).subscribe(result => {console.log(result)});
  }

}
