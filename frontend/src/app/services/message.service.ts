import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = `${environment.apiUrl}employees`;
  constructor(private httpClient: HttpClient) { }


  sendMessage(message: Message): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/message`,message);
  }

  receiveMessage(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.baseUrl}/message`);
  }

  clearMessages(): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/message`);
  }
}
