import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {  MemberService } from '../member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  member: any = {};
  angForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private ms: MemberService, private fb: FormBuilder
    ) {
      // this.createForm();
     }
  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      occupation_name: ['', Validators.required],
      mobile_number: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.ms.editMember(params['id']).subscribe(res => {
        this.member = res;
      });
    });
  }

}
