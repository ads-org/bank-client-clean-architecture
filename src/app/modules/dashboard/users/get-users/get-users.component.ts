import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../../core/services/users.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getAll().subscribe(res => {
      console.log(res);
    });
  }
}
