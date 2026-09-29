import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeActiveChatComponent } from './employee-active-chat/employee-active-chat.component';
import { EmployeeChatComponent } from './employee-chat/employee-chat.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { OpenChatComponent } from './open-chat/open-chat.component';
import { ReceiveMessageComponent } from './receive-message/receive-message.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { TestComponent } from './test/test.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: "", redirectTo: 'employees', pathMatch: 'full' },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'send-message', component: SendMessageComponent },
  { path: 'receive-message', component: ReceiveMessageComponent },
  { path: 'employee-login', component: EmployeeLoginComponent },
  { path: 'employee-login/:senderId', component: EmployeeChatComponent },
  { path: 'employee-login/:senderId/:receiverId', component: EmployeeActiveChatComponent },
  { path: 'open-chat', component: OpenChatComponent },
  { path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
