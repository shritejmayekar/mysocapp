import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validator, Validators} from '@angular/forms';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder , private ms: MemberService) {
    this.createForm();
   }
   createForm() {
     this.angForm = this.fb.group({
       person_name: ['', Validators.required],
       occupation_name: ['', Validators.required],
       mobile_number: ['', Validators.required]
     });
   }
   // tslint:disable-next-line:variable-name
   addMember(person_name, occupation_name, mobile_number) {
    this.ms.addMember(person_name, occupation_name, mobile_number);
  }

  ngOnInit() {
  }

}
