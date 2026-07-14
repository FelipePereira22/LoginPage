import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private http =inject(HttpClient)
  registerValues = signal<any>(null)

  userSave(formResult: any){
    const urlServer = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.post(urlServer, formResult)
  }

}

