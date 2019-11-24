import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    EmployeeAddComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    FormsModule
  ]
})
export class EmployeeModule {
}
