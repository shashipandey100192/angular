import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { StudentRegComponent } from './student-reg/student-reg.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';


@NgModule({
  declarations: [StudentRegComponent, EmployeeRegComponent],
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ]
})
export class AdmissionModule { }
