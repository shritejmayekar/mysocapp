import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import Member from '../member';
// import { Member } from '../member';
@Component({
  selector: 'app-member-get',
  templateUrl: './member-get.component.html',
  styleUrls: ['./member-get.component.css']
})
export class MemberGetComponent implements OnInit {
  members: Member[];
  constructor(private ms: MemberService) { }

  ngOnInit() {
    this.ms.getMembers()
    .subscribe((data: Member[]) => {
      this.members = data;
    });
  }

}
