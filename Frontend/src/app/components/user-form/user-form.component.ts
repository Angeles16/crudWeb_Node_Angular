import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { User } from 'src/app/models/Users';


import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  user: User = {
    id: 0,
    name: '',
    adress: '',
    phone: '',
  };

  edit: boolean = false;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.userService.getUser(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.user = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewUser() {
    delete this.user.id;
    this.userService.saveUser(this.user).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/user']);
        },
        err => console.error(err)
      )
  }

  updateUser() {
    console.log(this.user.id)
    var num = Number(this.user.id);
    this.userService.updateUser(num, this.user)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/user']);
        },
        err => console.error(err)
      )
  }

}
