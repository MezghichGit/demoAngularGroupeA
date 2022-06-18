import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  public cours: string[] = ["Java", "Spring", "Angular"];
  getCours() {
    return this.cours;
  }
  getListeUsers()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
