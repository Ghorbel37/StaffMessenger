import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeActiveChatComponent } from './employee-active-chat.component';

describe('EmployeeActiveChatComponent', () => {
  let component: EmployeeActiveChatComponent;
  let fixture: ComponentFixture<EmployeeActiveChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeActiveChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeActiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
