import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  uri = 'http://localhost:4000/member';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:variable-name
  addMember(person_name, occupation_name, mobile_number) {
    const obj = {
      // tslint:disable-next-line:object-literal-shorthand
      person_name: person_name,
      // tslint:disable-next-line:object-literal-shorthand
      occupation_name: occupation_name,
      // tslint:disable-next-line:object-literal-shorthand
      mobile_number: mobile_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getMembers() {
    return this.http
           .get(`${this.uri}`);
  }
}
