/**
 * Created by Quang Nguyen on 3/21/2017.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee/employee.service'
@Component({
  selector: 'employee-add-component',
  templateUrl: 'employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
  public _id: number;
  public employee: any;
  constructor(
    private router: Router, private activatedRoute: ActivatedRoute,
    public employeeService: EmployeeService
  ) {

  }
  ngOnInit() {
    this.employee = {};
  }

  GotoEmployee() {
    this.router.navigate(['employees']);
  }
  SaveForm() {
    this.employeeService.Add(this.employee).subscribe(response => {
      if (response) {
        alert('add success');
        this.router.navigate(['/employees']);
      }
    })
  }
}
