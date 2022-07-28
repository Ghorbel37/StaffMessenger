import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReceiveMessageComponent } from './receive-message/receive-message.component';
import { EmployeeChatComponent } from './employee-chat/employee-chat.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { OpenChatComponent } from './open-chat/open-chat.component';
import { EmployeeActiveChatComponent } from './employee-active-chat/employee-active-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    SendMessageComponent,
    ReceiveMessageComponent,
    EmployeeChatComponent,
    EmployeeLoginComponent,
    OpenChatComponent,
    EmployeeActiveChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
